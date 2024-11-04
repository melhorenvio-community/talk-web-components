import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: "stencil-listen-event",
})

export class StencilListenEvent {
  @State() active: boolean = true;

  @Listen('click', { capture: true })
  handleClick() {
    this.active = !this.active;
  }

  render() {
    return (
      <div class="flex gap-5">
        <button>{this.active ? 'Desativar' : 'Ativar'} campo</button>
        <input type="text" disabled={!this.active} name="campo" />
      </div>
    );
  }
}
