<template>
  <div class="w-full h-full flex flex-col gap-4 p-7 bg-neutral-dark text-left border-draw">
    <span class="flex items-center justify-center w-11 h-11 rounded-lg bg-neutral-murk">
      <slot name="icon" />
    </span>

    <h3 class="text-md font-bold">
      <slot name="title" />
    </h3>

    <p class="text-sm font-normal">
      <slot name="description" />
    </p>
  </div>
</template>
