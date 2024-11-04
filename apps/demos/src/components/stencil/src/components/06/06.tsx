import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "stencil-array-prop",
})

export class StencilArrayProp {
  @Prop() users: string[];

  render() {
    return (
      <ul>
        {this.users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    );
  }
}
