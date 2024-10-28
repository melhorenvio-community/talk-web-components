<script lang="ts" setup>
import wcLogo from "@/assets/svg/wc-logo.svg";
</script>

<template>
  <main class="flex flex-col gap-16 w-full h-full max-w-[800px] py-16 m-auto">
    <header class="flex flex-col gap-6 items-center text-center">
      <slot name="heading">
        <wc-logo class="w-[120px] h-auto" />

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
        <web-hello-world content="I am a Web Component!" />
        <stencil-first-component />
        <stencil-prop-component name="Juca" />
      </slot>
    </section>
  </main>
</template>
