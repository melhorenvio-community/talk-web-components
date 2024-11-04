<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <app-layout>
    <template #heading>
      <app-heading>
        Hello from {{ route.name }}
      </app-heading>
    </template>

    <template #content>
      <p>This is a demo page.</p>
    </template>
  </app-layout>
</template>
