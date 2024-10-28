<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },
});
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
