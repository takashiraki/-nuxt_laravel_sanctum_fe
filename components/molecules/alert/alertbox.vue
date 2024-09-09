<script setup lang="ts">
import type { AlertItemInterface } from "~/types/alert/AlertItemInterface";

const props = defineProps<AlertItemInterface>();
</script>
<template>
  <div>
    <Alert variant="destructive" class="mb-4">
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>{{ props.title }}</AlertTitle>
      <AlertDescription>
        {{ props.description }}
      </AlertDescription>
    </Alert>
  </div>
</template>
