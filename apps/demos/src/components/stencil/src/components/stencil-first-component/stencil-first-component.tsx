import { Component, h } from "@stencil/core";

@Component({
  tag: "stencil-first-component",
})

export class StencilFirstComponent {
  render() {
    return (
      <div>
        <h1>Stencil First Component</h1>
      </div>
    );
  }
}
