import { Component, h, Prop, Watch } from "@stencil/core";

@Component({
  tag: "stencil-prop-validation",
})

export class StencilPropValidation {
  @Prop() name: string;

  @Watch("name")
  validateName(newValue: string) {
    if (!newValue) {
      throw new Error("O nome precisa ser preenchido");
    }

    if (newValue.length <= 2) {
      throw new Error("O nome precisa ter mais de 2 caracteres");
    }
  }

  connectedCallback() {
    this.validateName(this.name);
  }

  render() {
    return (
      <p>Exibindo o nome {this.name}, que precisa ter mais de 2 caracteres.</p>
    );
  }
}
