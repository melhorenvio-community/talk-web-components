<script lang="ts" setup>
import type { IDemoPageProps } from "./types";

const { title, description } = defineProps<IDemoPageProps>();
</script>

<template>
  <app-layout alignment="left">
    <template #heading>
      <app-heading>
        {{ title }}

        <template #subheading>
          <p>{{ description }}.</p>
        </template>
      </app-heading>
    </template>

    <template #content>
      <p>Esta demo aborda como contruir o nosso primeiro e mais simples <i>Web Component</i> utilizando as API nativas.</p>

      <div class="my-7 p-5 bg-primary-light rounded-lg text-center">
        <web-hello-world />
      </div>
    </template>
  </app-layout>
</template>
