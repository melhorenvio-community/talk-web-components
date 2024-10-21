<script lang="ts" setup>
</script>

<template>
  <main>
    <header>
      <slot name="heading">
        <app-heading>
          Uma introdução abrangente aos Web Components e suas possibilidades

          <template #subheading>
            <p>Exemplos práticos com <b>Web Components</b> puros, utilização com o <i>framework</i> <b>stencil.js</b> e mais.</p>
          </template>
        </app-heading>
      </slot>
    </header>

    <section>
      <slot name="content">
        <web-hello-world content="I am a Web Component!" />
        <stencil-first-component />
        <stencil-prop-component name="Juca" />
      </slot>
    </section>

    <footer>
      <slot name="footer">
        <app-footer>
          <p>Diego Rocha, Leonardo Adamoli | Front-end developers @melhorenvio</p>
        </app-footer>
      </slot>
    </footer>
  </main>
</template>
