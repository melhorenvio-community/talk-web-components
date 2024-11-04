import { Component, Prop, Watch, State, h } from '@stencil/core';

@Component({
  tag: 'stencil-watch-prop',
})
export class StencilWatchProp {
  @Prop() birthYear: number;

  @State() age: number;

  @Watch('birthYear')
  calculateAge(newValue: number) {
    const currentYear = new Date().getFullYear();

    this.age = currentYear - newValue;
  }

  render() {
    return (
      <p>Idade: {this.age}</p>
    );
  }
}
