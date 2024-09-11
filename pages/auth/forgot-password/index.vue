<script setup lang="ts">
import type { AlertItemInterface } from "~/types/alert/AlertItemInterface";
import type { CardItemInterface } from "~/types/card/CardItemInterface";
import type { InputItemInterface } from "~/types/form/InputItemInterface";

const alertItem: AlertItemInterface = {
  title: "Email incorect",
  description: "The email you entered is not registered.",
};

const cardItem: CardItemInterface = {
  title: "Forgot Password",
  description: "Enter your email address to reset your password.",
};

const formItem: InputItemInterface = {
  name: "email",
  label: "Email",
  type: "email",
  placeholder: "m@examle.com",
};

const inductionSignIn = {
  title: "Remember your password?",
  description: "Sign in",
  link: "/auth/signin",
};
</script>
<template>
  <div class="h-screen flex justify-center items-center">
    <ForgotPasswordTemplate
      :alert-item="alertItem"
      :card-item="cardItem"
      :form-item="formItem"
      :induction-sign-in="inductionSignIn"
    />
  </div>
</template>
