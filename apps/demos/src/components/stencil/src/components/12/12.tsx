import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: "stencil-emit-event",
})

export class StencilEmitEvent {
  @Event() timeUpdated: EventEmitter<number>;

  emitTime() {
    this.timeUpdated.emit(Date.now());
  }

  render() {
    return (
      <button onClick={this.emitTime.bind(this)}>Verificar hora</button>
    );
  }
}
