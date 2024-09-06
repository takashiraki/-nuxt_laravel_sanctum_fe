<script setup lang="ts">
import type { InputItemInterface } from "~/types/form/InputItemInterface";

const props = defineProps<{
  formItem: InputItemInterface[];
}>();
</script>
<template>
  <div>
    <form v-on:submit.prevent="">
      <div class="grid gap-4">
        <div v-for="(item, index) in props.formItem" :key="index">
          <div class="grid gap-2">
            <FormField v-slot="{ componentField }" :name="item.name">
              <FormItem>
                <FormLabel>{{ item.label }}</FormLabel>
                <FormControl>
                  <Input
                    :type="item.type"
                    :placeholder="item.placeholder"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>
        <ButtonAtom :type="'submit'" :label="'Sign in'" :class="'w-full'" />
      </div>
    </form>
  </div>
</template>
