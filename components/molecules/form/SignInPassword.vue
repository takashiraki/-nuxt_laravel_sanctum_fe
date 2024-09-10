<script setup lang="ts">
import type { InputItemInterface } from "~/types/form/InputItemInterface";
interface passwordListItem {
  title: string;
  link: string;
}

const props = defineProps<{
  item: InputItemInterface;
  reset: passwordListItem;
}>();
</script>
<template>
  <div>
    <FormField v-slot="{ componentField }" :name="props.item.name">
      <FormItem>
        <div class="flex items-center">
          <Label>{{ props.item.label }}</Label>
          <a
            :href="props.reset.link"
            class="ml-auto inline-block text-sm underline"
          >
            {{ props.reset.title }}
          </a>
        </div>
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
