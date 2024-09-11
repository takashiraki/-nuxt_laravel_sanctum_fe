<script setup lang="ts">
import { useAlertState } from "~/composables/states/form/AlertState";
import type { AlertItemInterface } from "~/types/alert/AlertItemInterface";
import type { CardItemInterface } from "~/types/card/CardItemInterface";
import type { InputItemInterface } from "~/types/form/InputItemInterface";

interface inductionSignIn {
  title: string;
  description: string;
  link: string;
}

defineProps<{
  cardItem: CardItemInterface;
  formItem: InputItemInterface;
  alertItem: AlertItemInterface;
  inductionSignIn: inductionSignIn;
}>();

const alertState = useAlertState();
</script>
<template>
  <div>
    <Card class="mx-auto max-w-sm">
      <CardHeaderOrganisms
        :title="cardItem.title"
        :description="cardItem.description"
      />
      <CardContent>
        <Alertbox
          v-if="alertState.alertState.value"
          :title="alertItem.title"
          :description="alertItem.description"
        />
        <PasswordResetRequestForm :form-item="formItem" />
        <div class="mt-4 text-center text-sm">
          {{ inductionSignIn.title }}
          <nuxt-link :to="inductionSignIn.link" class="underline">{{
            inductionSignIn.description
          }}</nuxt-link>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
