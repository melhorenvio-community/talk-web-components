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
      <div class="flex flex-col gap-6">
        <p>Esta demo aborda como contruir o nosso primeiro e mais simples <i>Web Component</i> utilizando as API nativas.</p>

        <!-- Web Component -->
        <web-hello-world />
        <!-- Web Component -->

        <p>
          No exemplo acima, estamos definindo um <i>Custom Element</i> denominado <code class="code">web-hello-world</code>
          para iniciar nossa exploração nas APIs disponíveis, partindo de exemplos básicos até outros mais complexos.
        </p>
      </div>
    </template>
  </app-layout>
</template>
