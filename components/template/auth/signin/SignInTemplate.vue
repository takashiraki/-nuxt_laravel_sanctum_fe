<script setup lang="ts">
import { useSignInFormState } from "~/composables/states/form/SignInFormState";
import type { AlertItemInterface } from "~/types/alert/AlertItemInterface";
import type { CardItemInterface } from "~/types/card/CardItemInterface";
import type { InputItemInterface } from "~/types/form/InputItemInterface";

interface passwordListItem {
  title: string;
  link: string;
}

interface inductionSignUp {
  title: string;
  description: string;
  link: string;
}

interface alertItem {
  alertItem: AlertItemInterface;
  status: boolean;
}

interface propsItem {
  cardItem: CardItemInterface;
  formItem: InputItemInterface[];
  passwordListItem: passwordListItem;
  inductionSignUp: inductionSignUp;
  alertItem: alertItem;
}

const props = defineProps<propsItem>();

const signInFormState = useSignInFormState();
</script>
<template>
  <div>
    <Card class="mx-auto max-w-sm">
      <CardHeaderOrganisms
        :title="props.cardItem.title"
        :description="props.cardItem.description"
      />
      <CardContent>
        <Alertbox
          v-if="signInFormState.signInFormState.value"
          :title="props.alertItem.alertItem.title"
          :description="props.alertItem.alertItem.description"
        />
        <SignInForm
          :formItem="props.formItem"
          :reset="props.passwordListItem"
        />
        <div class="mt-4 text-center text-sm">
          {{ props.inductionSignUp.title }}
          <nuxt-link :to="props.inductionSignUp.link" class="underline">{{
            props.inductionSignUp.description
          }}</nuxt-link>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
