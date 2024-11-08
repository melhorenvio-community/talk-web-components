<script setup lang="ts">
import type { IAppFooterProps } from "./types";

const { title } = defineProps<IAppFooterProps>();
</script>

<template>
  <footer
    v-if="title"
    class="
      w-full
      flex
      justify-between
      items-center
      fixed
      bottom-0
      left-0
      px-4
      py-2
      text-sm
      font-semibold
      bg-gradient-to-r
      from-primary-dark
      to-primary-light
    "
  >
    <div class="flex items-center gap-4 text-left">
      {{ title }}

      <slot name="flag">
        <twemoji-flag-brazil />
      </slot>
    </div>

    <slot />
  </footer>
</template>
