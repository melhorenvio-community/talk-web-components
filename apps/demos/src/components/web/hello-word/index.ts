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
            color: crimson;
          }
        </style>

        ${this.content}
      `;

      shadow.appendChild(root);
    }

    get content() {
      return this.getAttribute("content") ?? "";
    }
  }

  customElements.define("web-hello-world", HelloWorld);
})();
