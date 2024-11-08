<script setup lang="ts">
import type { IAppFooterItemProps } from "./types";

const { text, url } = defineProps<IAppFooterItemProps>();
</script>

<template>
  <a
    :href="url"
    :title="text"
    target="_blank"
    rel="noopener noreferrer"
    class="
      flex
      justify-center
      items-center
      gap-4
      text-neutral-shine
    "
  >
    <slot />

    <span>{{ text }}</span>
  </a>
</template>
