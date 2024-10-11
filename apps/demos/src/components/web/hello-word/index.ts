(function () {
  class HelloWorld extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      const helloWorldContainer = document.createElement("p");

      const content = this.content;

      helloWorldContainer.classList.add("hello-world");
      helloWorldContainer.innerHTML = `
        <style>
          .hello-world {
            color: crimson;
          }
        </style>

        ${content}
      `;

      shadow.appendChild(helloWorldContainer);
    }

    // gathering data from element attributes
    get content() {
      return this.getAttribute("content") ?? "";
    }
  }

  customElements.define("web-hello-world", HelloWorld);
})();
