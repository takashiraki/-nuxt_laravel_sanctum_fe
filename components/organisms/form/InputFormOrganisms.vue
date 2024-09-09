<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { configure, useForm } from "vee-validate";
import { z } from "zod";
import type { InputItemInterface } from "~/types/form/InputItemInterface";

const props = defineProps<{
  formItem: InputItemInterface[];
}>();

configure({
  validateOnBlur: false,
  validateOnChange: false,
});

const { $sanctumAuth } = useNuxtApp();

const loadingStatus = ref(false);

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
  }
});
</script>
<template>
  <div>
    <form v-on:submit.prevent="login">
      <div class="grid gap-4">
        <div v-for="(item, index) in props.formItem" :key="index">
          <div class="grid gap-2">
            <InputForm :item="item" />
          </div>
        </div>
        <ButtonAtom :type="'submit'" :label="'Sign in'" :class="'w-full'" />
      </div>
    </form>
  </div>
</template>
