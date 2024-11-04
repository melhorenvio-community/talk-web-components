<template>
  <main class="flex flex-col gap-16 w-full h-full max-w-[800px] py-16 m-auto">
    <header v-if="$slots.heading" class="flex flex-col gap-6 items-center text-center">
      <slot name="heading" />
    </header>

    <section v-if="$slots.content" class="grid grid-cols-3 gap-5">
      <slot name="content" />
    </section>
  </main>
</template>
