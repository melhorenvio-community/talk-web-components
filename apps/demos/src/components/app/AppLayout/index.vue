<script setup lang="ts">
import type { IAppLayoutProps } from "./types";

const { alignment = "center" } = defineProps<IAppLayoutProps>();
</script>

<template>
  <main
    class="w-full h-full max-w-[800px] py-16 m-auto flex flex-col gap-16"
    :class="{
      'text-left': alignment === 'left',
      'text-center': alignment === 'center',
      'text-right': alignment === 'right',
    }"
  >
    <header v-if="$slots.heading" class="flex flex-col gap-6">
      <slot name="heading" />
    </header>

    <section v-if="$slots.content" class="flex flex-col gap-3">
      <slot name="content" />
    </section>
  </main>
</template>
