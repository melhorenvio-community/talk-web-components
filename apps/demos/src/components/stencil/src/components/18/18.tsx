import { Component, h } from "@stencil/core";

@Component({
  tag: "stencil-style-shadow",
  styleUrl: "stencil-style-shadow.css",
  shadow: true,
})

export class StencilStyleShadow {
  render() {
    return (
      <div>
        <h1>Stencil Styled Component</h1>
      </div>
    );
  }
}
