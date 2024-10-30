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
        <demo-card>
          <template #icon>
            <logos-webcomponents />
          </template>

          <template #title>
            1. Custom Elements
          </template>

          <template #description>
            Utilizando API nativa para construir nosso primeiro exemplo.
          </template>
        </demo-card>

        <demo-card>
          <template #icon>
            <logos-webcomponents />
          </template>

          <template #title>
            2. Custom Elements
          </template>

          <template #description>
            Exemplificando a passagem de props entre <i>custom elements</i>.
          </template>
        </demo-card>

        <demo-card>
          <template #icon>
            <ion-logo-stencil />
          </template>

          <template #title>
            3. Stencil Elements
          </template>

          <template #description>
            Utilizando o Stencil.js para construir Web Components.
          </template>
        </demo-card>

        <demo-card>
          <template #icon>
            <ion-logo-stencil />
          </template>

          <template #title>
            4. Stencil Elements
          </template>

          <template #description>
            Explorando a passagem de <i>props</i> entre <b>stencil elements</b>.
          </template>
        </demo-card>
      </slot>
    </section>
  </main>
</template>
