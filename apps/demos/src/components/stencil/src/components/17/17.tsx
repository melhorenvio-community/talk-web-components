import { Component, h } from "@stencil/core";

@Component({
  tag: "stencil-shadow-dom",
  shadow: true,
})

export class StencilShadowDom {
  render() {
    return (
      <div>
        <h1>Stencil Shadow Dom Component</h1>
      </div>
    );
  }
}
