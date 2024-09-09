<script setup lang="ts">
import type { InputItemInterface } from "~/types/form/InputItemInterface";

const props = defineProps<{
  item: InputItemInterface;
}>();
</script>
<template>
  <div>
    <FormField v-slot="{ componentField }" :name="props.item.name">
      <FormItem>
        <FormLabel>{{ props.item.label }}</FormLabel>
        <FormControl>
          <Input
            :type="props.item.type"
            :placeholder="props.item.placeholder"
            v-bind="componentField"
            required
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </div>
</template>
