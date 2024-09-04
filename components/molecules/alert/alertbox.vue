<script setup lang="ts">
interface propsItem {
  title: string;
  description: string;
}

const props = defineProps<propsItem>();
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
