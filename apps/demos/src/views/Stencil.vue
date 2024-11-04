<script setup>
const objectPropRef = ref(null);
const arrayPropRef = ref(null);

watchEffect(() => {
  if (objectPropRef.value) {
    objectPropRef.value.user = { name: "Juca", age: 37 };
  }

  if (arrayPropRef.value) {
    arrayPropRef.value.users = ["Juca", "Carlo", "Battisti"];
  }
});

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

attachEvent();

async function calculateAge() {
  await customElements.whenDefined("stencil-watch-prop");
  const watchProp = document.querySelector("#watch-prop").value;
  document.querySelector("stencil-watch-prop").birthYear = watchProp;
}
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
      <stencil-object-prop ref="objectPropRef" />
    </div>
    <div class="mb-5 border border-neutral-medium">
      <stencil-array-prop ref="arrayPropRef" />
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
  </div>
</template>
