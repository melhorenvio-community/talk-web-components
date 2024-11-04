<template>
  <main class="flex flex-col gap-16">
    <header v-if="$slots.heading" class="flex flex-col gap-6 items-center text-center">
      <slot name="heading" />
    </header>

    <section v-if="$slots.content" class="flex flex-col gap-3 items-center">
      <slot name="content" />
    </section>
  </main>
</template>
