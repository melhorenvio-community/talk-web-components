<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>

  <app-footer title="Leonardo Adamoli e Diego Rocha | Front-end Developers - @melhorenvio">
    <app-footer-item
      text="talk-web-components"
      url="https://github.com/melhorenvio-community/talk-web-components"
    >
      <carbon-logo-github />
    </app-footer-item>
  </app-footer>
</template>
