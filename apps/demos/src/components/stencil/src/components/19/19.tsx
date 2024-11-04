import { Component, h } from "@stencil/core";

@Component({
  tag: "stencil-style-shadow-vars",
  styleUrl: "stencil-style-shadow-vars.css",
  shadow: true,
})

export class StencilStyleShadowVars {
  render() {
    return (
      <div>
        <h1>Stencil Styled Component</h1>
      </div>
    );
  }
}
