import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "stencil-host-element",
})

export class StencilHostElement {
  @Prop() open: boolean = false;

  render() {
    return (
      <Host aria-hidden={this.open ? "false" : "true"}>
        <div class={this.open ? 'h-auto overflow-hidden' : 'h-0 overflow-hidden'}>
          <p>Component Content</p>
        </div>
      </Host>
    );
  }
}
