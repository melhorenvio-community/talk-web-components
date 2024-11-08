<script lang="ts" setup>
import type { IAppHeadingProps } from "./types";

const { level = "h1" } = defineProps<IAppHeadingProps>();
</script>

<template>
  <component
    :is="level"
    class="text-xl font-bold"
  >
    <slot />
  </component>

  <slot
    v-if="$slots.subheading"
    name="subheading"
  />
</template>
