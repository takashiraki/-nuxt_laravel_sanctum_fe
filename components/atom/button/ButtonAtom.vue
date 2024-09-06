<script setup lang="ts">
interface ButtonItemInterface {
  type: string;
  label: string;
  class: string | null;
}

const propsItem = defineProps<ButtonItemInterface>();
</script>
<template>
  <div>
    <Button :class="propsItem.class" :type="propsItem.type">
      {{ propsItem.label }}</Button
    >
  </div>
</template>
