<script setup lang="ts">
import type { CardItemInterface } from "~/types/card/CardItemInterface";

const cardItem: CardItemInterface = {
  title: "Password Reset Request Complete",
  description:
    "We have sent you an email with a link to reset your password. Please check your inbox and follow the instructions in the email.",
};

const ButtonItem = {
  type: "button",
  label: "Back to sign in",
  class: "w-full",
};

const inductionSignIn = {
  button: ButtonItem,
  link: "/auth/signin",
};
</script>
<template>
  <div class="h-screen flex justify-center items-center">
    <RequestComplemteTemplate
      :card-item="cardItem"
      :button-item="inductionSignIn"
    />
  </div>
</template>
