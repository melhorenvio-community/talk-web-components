import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "stencil-required-prop",
})

export class StencilRequiredProp {
  @Prop() name!: string;

  render() {
    return (
      <div>
        <p>Hello, my name is {this.name}</p>
      </div>
    );
  }
}
