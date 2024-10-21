<script lang="ts" setup>
</script>

<template>
  <main>
    <header>
      <slot name="heading" />
    </header>

    <section>
      <slot name="content" />
    </section>

    <footer>
      <slot name="footer" />
    </footer>
  </main>
</template>
