import { Component, h, State } from "@stencil/core";

@Component({
  tag: "stencil-internal-state",
})

export class StencilInternalState {
  timer: number;

  @State() currentTime: number = Date.now();

  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.currentTime = Date.now();
    }, 1000);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.currentTime).toLocaleTimeString();

    return (
      <p>Hora: {time}</p>
    );
  }
}
