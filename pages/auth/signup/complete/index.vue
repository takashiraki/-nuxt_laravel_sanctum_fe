<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
</script>
<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl"> Sign up complete </CardTitle>
        <CardDescription>
          Sign-up has been completed. Go to the sign-in screen and sign in
          immediately!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <nuxt-link to="/auth/signin">
          <Button class="w-full"> Go to sign up </Button>
        </nuxt-link>
      </CardContent>
    </Card>
  </div>
</template>
