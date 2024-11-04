import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "stencil-boolean-prop",
})

export class StencilBooleanProp {
  @Prop() checked: boolean;
  @Prop() name: string;
  @Prop() label: string;

  render() {
    return (
      <div>
        <label>
          <input type="checkbox" name={this.name} checked={this.checked} />
          {this.label}
        </label>
      </div>
    );
  }
}
