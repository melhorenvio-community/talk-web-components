import { Component, h, Prop } from "@stencil/core";

export type User = {
  name: string;
  age: number;
}

@Component({
  tag: "stencil-object-prop",
})

export class StencilObjectProp {
  @Prop() user: User;

  render() {
    return (
      <div>
        <p>O estudante {this.user.name} tem {this.user.age} anos.</p>
      </div>
    );
  }
}
