import { Component, h, Method, State } from "@stencil/core";

@Component({
  tag: "stencil-public-method",
})

export class StencilPublicMethod {
  @State() number: number;

  @Method()
  async generateNumber(): Promise<void> {
    this.number = Math.round(Math.random() * 10);
  }

  render() {
    return (
      <p>
        {this.number
          ? `Número gerado: ${this.number}`
          : "Clique no botão para gerar um número."
        }
      </p>
    );
  }
}
