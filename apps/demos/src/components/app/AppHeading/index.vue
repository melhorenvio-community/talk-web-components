<script lang="ts" setup>
import type { IAppHeadingProps } from "./types";

withDefaults(defineProps<IAppHeadingProps>(), {
  level: "h1",
});
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
