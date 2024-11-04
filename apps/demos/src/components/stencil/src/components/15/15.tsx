import { Component, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'stencil-watch-multiple-prop',
})
export class StencilWatchMultipleProp {
  @Prop() color: string;

  @Prop() size: number;

  @State() lastPropChanged: string;

  @Watch('color')
  @Watch('size')
  handleMultipleChange(_newValue: number, _oldValue: number, propName: string) {
    this.lastPropChanged = propName;
  }

  render() {
    return (
      <p>A prop {this.lastPropChanged} foi modificada para o valor: {this[this.lastPropChanged]}</p>
    );
  }
}
