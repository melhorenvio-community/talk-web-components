<script lang="ts" setup>
</script>

<template>
  <main>
    <header>
      <slot name="heading">
        <h1>Default heading content</h1>
      </slot>
    </header>

    <section>
      <slot name="content" />
    </section>

    <footer>
      <slot name="footer">
        <p>Default footer content</p>
      </slot>
    </footer>
  </main>
</template>
