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
import { Label } from "@/components/ui/label";
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

import { AlertCircle } from "lucide-vue-next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

configure({
  validateOnBlur: false,
  validateOnChange: false,
});

definePageMeta({
  middleware: "guest",
});

const { $sanctumAuth } = useNuxtApp();

const loadingStatus = ref(false);

const credentialError = ref("");

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email().min(1).max(256),
    password: z.string().min(3).max(256),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: "",
    password: "",
  },
});

const login = handleSubmit(async (values) => {
  try {
    loadingStatus.value = true;
    credentialError.value = "";
    await $sanctumAuth.login(
      {
        email: values.email,
        password: values.password,
      },
      () => {
        navigateTo({
          path: "/home",
        });
      }
    );
  } catch (error: any) {
    loadingStatus.value = false;
    credentialError.value = "Credential error.";
  }
});
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl"> Sign in </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alertbox
          v-if="credentialError"
          title="Error"
          description="Your session has expired. Please log in again."
        />
        <form v-on:submit.prevent="login">
          <div class="grid gap-4">
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
                  <FormLabel>
                    <div class="flex items-center">
                      <Label for="password">Password</Label>
                      <a
                        href="#"
                        class="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input type="password" v-bind="componentField" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <Button type="submit" class="w-full"> Login </Button>
          </div>
          <div class="mt-4 text-center text-sm">
            Don't have an account?
            <!-- <a href="#" class="underline"> Sign up </a> -->
            <nuxt-link to="/auth/signup" class="underline">Sign up</nuxt-link>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
