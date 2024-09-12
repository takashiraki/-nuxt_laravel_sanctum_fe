<script setup lang="ts">
import { Loader2 } from "lucide-vue-next";
import { useButtonLoadingState } from "~/composables/states/button/loadingButtonState";
import type { ButtonItemInterface } from "~/types/button/ButtonItemInterface";

const propsItem = defineProps<ButtonItemInterface>();

const buttonLoadingState = useButtonLoadingState();
</script>
<template>
  <div>
    <Button
      :class="propsItem.class"
      :type="propsItem.type"
      v-bind:disabled="buttonLoadingState.buttonLoadingState.value"
    >
      <Loader2
        v-if="buttonLoadingState.buttonLoadingState.value"
        class="w-4 h-4 mr-2 animate-spin"
      />
      {{ propsItem.label }}</Button
    >
  </div>
</template>
