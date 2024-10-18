import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-prop-component',
})
export class StencilPropComponent {
  @Prop() name: string;

  render() {
    return (
      <div>
        <p>Hello, my name is {this.name}</p>
      </div>
    );
  }
}
