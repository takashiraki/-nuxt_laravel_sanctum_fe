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
import SignInTemplate from "~/components/template/auth/signin/SignInTemplate.vue";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import type { CardItemInterface } from "~/types/card/CardItemInterface";
import type { InputItemInterface } from "~/types/form/InputItemInterface";

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

const cardItem: CardItemInterface = {
  title: "Sign in",
  description: "Enter your email below to login to your account",
};

const formItem: InputItemInterface[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "m@examle.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: null,
  },
];

const inductionSignUp = {
  title: "Don't have an account?",
  description: "Sign up",
  link: "/auth/signup",
};

const forgotPassword = {
  title: "Forgot your password?",
  link: "#",
};

const alertItem = ref({
  alertItem: {
    title: "Credential error",
    description: "The email or password you entered is incorrect.",
  },
  status: false,
});
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <SignInTemplate
      :card-item="cardItem"
      :form-item="formItem"
      :password-list-item="forgotPassword"
      :induction-sign-up="inductionSignUp"
      :alert-item="alertItem"
    />
  </div>
</template>
