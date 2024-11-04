import { Component, h } from "@stencil/core";

@Component({
  tag: "stencil-style-scoped",
  styleUrl: "stencil-style-scoped.css",
  scoped: true,
})

export class StencilStyleScoped {
  render() {
    return (
      <div>
        <h1>Stencil Styled Component</h1>
      </div>
    );
  }
}
