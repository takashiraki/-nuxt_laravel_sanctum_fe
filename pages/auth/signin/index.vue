<script setup lang="ts">
import SignInTemplate from "~/components/template/auth/signin/SignInTemplate.vue";
import type { CardItemInterface } from "~/types/card/CardItemInterface";
import type { InputItemInterface } from "~/types/form/InputItemInterface";

definePageMeta({
  middleware: "guest",
});

useHead({
  title: "Sign in",
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
