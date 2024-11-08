(function () {
  class HelloWorld extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      const root = document.createElement("p");

      root.classList.add("hello-world");
      root.innerHTML = `
        <style>
          .hello-world {
            color: #FFFFFF;
            margin: 0;
          }
        </style>

        <b>Olá, eu sou um Web Component nativo, rodando dentro de uma aplicação Vue.js! 🎉</b>
      `;

      shadow.appendChild(root);
    }
  }

  customElements.define("web-hello-world", HelloWorld);
})();
