'use-strict';

(function() {
  class HelloWorld extents HTMLElement {
    constructor() {
      super();
    }
  }

  customElements.define('hello-world', HelloWorld);
});
