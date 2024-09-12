<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { z } from "zod";
import { useButtonLoadingState } from "~/composables/states/button/loadingButtonState";
import { useAlertState } from "~/composables/states/form/AlertState";
import type { InputItemInterface } from "~/types/form/InputItemInterface";

defineProps<{
  formItem: InputItemInterface;
}>();

const { $apiFetch } = useNuxtApp();

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email().min(1).max(256),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: "",
  },
});

const { setButtonLoading, resetButtonLoadingState } = useButtonLoadingState();

const { setAlertFailed, resetAlertState } = useAlertState();

const post = handleSubmit(async (values) => {
  setButtonLoading();
  resetAlertState();

  try {
    await $apiFetch("/api/password-reset-request", {
      method: "POST",
      body: {
        email: values.email,
      },
    });

    navigateTo({
      path: "/auth/forgot-password/request-complete",
    });
  } catch (error: any) {
    setAlertFailed();
  } finally {
    resetButtonLoadingState();
  }
});
</script>
<template>
  <div>
    <form v-on:submit.prevent="post">
      <div class="grid gap-4">
        <div class="grid gap-2">
          <InputForm :item="formItem" />
        </div>
        <ButtonAtom
          :type="'submit'"
          :label="'Password reset request'"
          :class="'w-full'"
        />
      </div>
    </form>
  </div>
</template>
