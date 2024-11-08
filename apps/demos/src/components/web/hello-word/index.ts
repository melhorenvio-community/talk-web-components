(function () {
  class HelloWorld extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      const root = document.createElement("div");

      root.classList.add("hello-world");
      root.innerHTML = `
        <style>
          .hello-world {
            padding: 24px;
            border-radius: 8px;
            color: #FFFFFF;
            background-color: #04468C;
            text-align: center;
          }

          .hello-world p {
            margin: 0;
          }
        </style>

        <p><strong>🎉 Olá, eu sou um Web Component nativo, rodando dentro de uma aplicação Vue.js! 🎉</strong></p>
      `;

      shadow.appendChild(root);
    }
  }

  customElements.define("web-hello-world", HelloWorld);
})();
