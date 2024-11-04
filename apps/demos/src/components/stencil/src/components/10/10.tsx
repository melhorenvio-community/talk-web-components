import { Component, h, State, Method } from "@stencil/core";

@Component({
  tag: "stencil-internal-state-reactive",
})

export class StencilInternalStateReactive {
  @State() currentTime: number = Date.now();

  @Method()
  async updateTime(): Promise<void> {
    this.currentTime = Date.now();
  }

  render() {
    const time = new Date(this.currentTime).toLocaleTimeString();

    return (
      <p>Hora: {time}</p>
    );
  }
}
