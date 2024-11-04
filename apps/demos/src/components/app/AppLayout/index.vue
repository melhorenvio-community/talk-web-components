<script lang="ts" setup>
import content from "@/static/content.json";

import { ECategoryTypes } from "./types";
</script>

<template>
  <main class="flex flex-col gap-16 w-full h-full max-w-[800px] py-16 m-auto">
    <header class="flex flex-col gap-6 items-center text-center">
      <slot name="heading">
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
      </slot>
    </header>

    <section class="grid grid-cols-3 gap-5">
      <slot name="content">
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
      </slot>
    </section>
  </main>
</template>
