<script setup lang="ts">
import { data } from "autoprefixer";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";

definePageMeta({
  middleware: "auth",
});

const { user } = useAuth();

const { $sanctumAuth } = useNuxtApp();

const logout = async () => {
  await $sanctumAuth.logout((data) => {
    navigateTo({
      path: "/auth/signin",
    });
  });
};
</script>
<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl"> home </CardTitle>
        <CardDescription>
          This is the home screen. Here it is possible to check user information
          and log out.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Id : {{ user.id }}</p>
        <p>User name : {{ user.name }}</p>
        <p>email : {{ user.email }}</p>
      </CardContent>
      <CardFooter>
        <nuxt-link to="/auth/signin">
          <Button v-on:click="logout"> Sign out </Button>
        </nuxt-link>
      </CardFooter>
    </Card>
  </div>
</template>
