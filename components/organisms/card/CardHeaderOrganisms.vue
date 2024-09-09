<script setup lang="ts">
import type { CardItemInterface } from "~/types/card/CardItemInterface";

const props = defineProps<CardItemInterface>();
</script>
<template>
  <div>
    <CardHeader>
      <CardTitle class="text-2xl"> {{ props.title }} </CardTitle>
      <CardDescription>
        {{ props.description }}
      </CardDescription>
    </CardHeader>
  </div>
</template>
