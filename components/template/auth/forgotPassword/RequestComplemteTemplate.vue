<script setup lang="ts">
import Card from "~/components/ui/card/Card.vue";
import type { ButtonItemInterface } from "~/types/button/ButtonItemInterface";
import type { CardItemInterface } from "~/types/card/CardItemInterface";

interface propsButtonItemInterface {
  button: ButtonItemInterface;
  link: string;
}
defineProps<{
  cardItem: CardItemInterface;
  buttonItem: propsButtonItemInterface;
}>();
</script>

<template>
  <div>
    <Card class="mx-auto max-w-sm">
      <CardHeaderOrganisms
        :title="cardItem.title"
        :description="cardItem.description"
      />
      <CardContent>
        <NuxtLink :to="buttonItem.link">
          <ButtonAtom
            :label="buttonItem.button.label"
            :type="buttonItem.button.type"
            :class="buttonItem.button.class"
          />
        </NuxtLink>
      </CardContent>
    </Card>
  </div>
</template>
