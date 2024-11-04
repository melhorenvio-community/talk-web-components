<template>
  <div class="w-full h-full max-w-[800px] py-16 m-auto">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </div>

  <app-footer title="Leonardo Adamoli e Diego Rocha | Front-end Developers - @melhorenvio">
    <app-footer-item
      text="talk-web-components"
      url="https://github.com/melhorenvio-community/talk-web-components"
    >
      <carbon-logo-github />
    </app-footer-item>
  </app-footer>
</template>
