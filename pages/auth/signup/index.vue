<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toTypedSchema } from "@vee-validate/zod";
import { configure, useForm } from "vee-validate";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

configure({
  validateOnBlur: false,
  validateOnChange: false,
});

definePageMeta({
  middleware: "guest",
});

const { $apiFetch } = useNuxtApp();

const runtimeconfig = useRuntimeConfig();

const loadingStatus = ref(false);

const credentialError = ref("");

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(1).max(256),
    email: z.string().email().min(1).max(256),
    password: z.string().min(3).max(256),
    password_confirmation: z.string(),
  })
);

const { handleSubmit, setErrors } = useForm({
  validationSchema: formSchema,
  initialValues: {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
});

const login = handleSubmit(async (values) => {
  try {
    loadingStatus.value = true;
    credentialError.value = "";

    await $apiFetch(`/api/signup`, {
      method: "POST",
      body: {
        name: values.name,
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
      },
    });

    navigateTo({
      path: "/auth/signup/complete",
    });
  } catch (error: any) {
    setErrors(error.data.errors);
  }
});
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl"> Sign up </CardTitle>
        <CardDescription>
          To sign in to your account, please enter your name, email and password
          below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form v-on:submit.prevent="login">
          <div class="grid gap-4">
            <div class="grid gap-2">
              <FormField v-slot="{ componentField }" name="name">
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" v-bind="componentField" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="grid gap-2">
              <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="m@example.com"
                      v-bind="componentField"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="grid gap-2">
              <FormField v-slot="{ componentField }" name="password">
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" v-bind="componentField" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="grid gap-2">
              <FormField
                v-slot="{ componentField }"
                name="password_confirmation"
              >
                <FormItem>
                  <FormLabel>Password confirm</FormLabel>
                  <FormControl>
                    <Input type="password" v-bind="componentField" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <Button type="submit" class="w-full"> Sign up </Button>
          </div>
          <div class="mt-4 text-center text-sm">
            You have an account?
            <nuxt-link to="/auth/signin" class="underline">Sign in</nuxt-link>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
