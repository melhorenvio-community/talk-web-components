import { Component, h } from "@stencil/core";

@Component({
  tag: "stencil-private-method",
})

export class StencilPrivateMethod {
  generateNumber(): Number {
    return Math.round(Math.random() * 10);
  }

  render() {
    return (
      <p>Número gerado: {this.generateNumber()}</p>
    );
  }
}
