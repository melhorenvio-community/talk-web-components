<script setup lang="ts">
async function fillProps() {
  await customElements.whenDefined("stencil-object-prop");
  await customElements.whenDefined("stencil-array-prop");

  document.querySelector("stencil-object-prop").user = { name: "Juca", age: 37 };
  document.querySelector("stencil-array-prop").users = ["Juca", "Carlo", "Battisti"];
}

async function generateNumber() {
  await customElements.whenDefined("stencil-public-method");
  await document.querySelector("stencil-public-method").generateNumber();
}

async function updateTime() {
  await customElements.whenDefined("stencil-internal-state-reactive");
  await document.querySelector("stencil-internal-state-reactive").updateTime();
}

async function attachEvent() {
  await customElements.whenDefined("stencil-emit-event");
  document.querySelector("stencil-emit-event").addEventListener("timeUpdated", (event) => {
    alert(new Date(event.detail).toLocaleTimeString());
  });
}

async function calculateAge() {
  await customElements.whenDefined("stencil-watch-prop");
  const watchProp = document.querySelector("#watch-prop").value;
  document.querySelector("stencil-watch-prop").birthYear = watchProp;
}

async function changeMultipleProp(propName: string) {
  await customElements.whenDefined("stencil-watch-multiple-prop");
  const watchProp = document.querySelector(`#watch-${propName}`).value;
  document.querySelector("stencil-watch-multiple-prop")[propName] = watchProp;
}

async function toggleHost() {
  await customElements.whenDefined("stencil-host-element");
  const currentValue = document.querySelector("stencil-host-element").open;
  document.querySelector("stencil-host-element").open = !currentValue;
}

attachEvent();
fillProps();
</script>

<template>
  <div class="max-w-[70vw] mx-auto">
    <h1>StencilJS</h1>
    <div class="mb-5 border border-neutral-medium">
      <stencil-first-component />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-prop-component name="Juca" />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-required-prop name="Juca" />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-boolean-prop name="juca" label="This is checked" checked="true" />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-boolean-prop name="juca" label="This is not checked" checked="false" />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-boolean-prop name="juca" label="This is checked" checked />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-boolean-prop name="juca" label="This is not checked" />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-boolean-prop name="juca" label="This is checked" checked="False" />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-object-prop />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-array-prop />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-prop-validation name="Juca" />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-prop-validation name="J" />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-prop-validation />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-public-method />
      <button @click="generateNumber">
        Gerar número
      </button>
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-private-method />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-internal-state-reactive />
      <button @click="updateTime">
        Atualizar hora
      </button>
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-internal-state />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-emit-event />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-listen-event />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <div class="flex gap-5">
        <input id="watch-prop" placeholder="Ano de nascimento" type="text" name="watch-prop">
        <button @click="calculateAge">
          Calcular idade
        </button>
      </div>
      <stencil-watch-prop />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <div class="flex gap-5">
        <input id="watch-color" placeholder="Informe a cor" type="color" name="watch-color">
        <button @click="changeMultipleProp('color')">
          Modificar cor
        </button>
      </div>
      <div class="flex gap-5">
        <input id="watch-size" placeholder="Informe o tamanho" type="number" name="watch-size">
        <button @click="changeMultipleProp('size')">
          Modificar tamanho
        </button>
      </div>
      <stencil-watch-multiple-prop />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <button @click="toggleHost">
        Abrir/fechar conteúdo
      </button>
      <stencil-host-element />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-shadow-dom />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-style-shadow />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-style-shadow-vars />
    </div>
  </div>
</template>

<style>
stencil-style-shadow-vars {
  --title-color: red;
}
</style>
