<script lang="ts" setup>
import { ECategoryTypes } from "@/components/app/AppLayout/types";

import content from "@/static/content.json";
</script>

<template>
  <app-layout>
    <template #heading>
      <logos-webcomponents class="w-[120px] h-auto" />

      <app-heading>
        Uma introdução abrangente aos <i>Web Components</i><br> e suas possibilidades

        <template #subheading>
          <p>
            Exemplos práticos na construção de <i>Web Components</i> puros,
            utilizando o <i>framework</i> <b>stencil.js</b> e testando a sua integração com o <b>Vue.js</b>.
          </p>
        </template>
      </app-heading>
    </template>

    <template #content>
      <demo-card
        v-for="({ category, title, description }, index) in content.examples"
        :key="description"
      >
        <template #icon>
          <logos-webcomponents v-if="category === ECategoryTypes.webComponents" />

          <ion-logo-stencil v-else />
        </template>

        <template #title>
          {{ index + 1 }}. {{ title }}
        </template>

        <template #description>
          {{ description }}.
        </template>
      </demo-card>
    </template>
  </app-layout>
</template>
