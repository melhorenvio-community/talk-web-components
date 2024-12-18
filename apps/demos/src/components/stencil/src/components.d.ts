/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { User } from "./components/05/05";
export { User } from "./components/05/05";
export namespace Components {
    interface StencilArrayProp {
        "users": string[];
    }
    interface StencilBooleanProp {
        "checked": boolean;
        "label": string;
        "name": string;
    }
    interface StencilEmitEvent {
    }
    interface StencilFirstComponent {
    }
    interface StencilHostElement {
        "open": boolean;
    }
    interface StencilInternalState {
    }
    interface StencilInternalStateReactive {
        "updateTime": () => Promise<void>;
    }
    interface StencilListenEvent {
    }
    interface StencilObjectProp {
        "user": User;
    }
    interface StencilPrivateMethod {
    }
    interface StencilPropComponent {
        "name": string;
    }
    interface StencilPropValidation {
        "name": string;
    }
    interface StencilPublicMethod {
        "generateNumber": () => Promise<void>;
    }
    interface StencilRequiredProp {
        "name": string;
    }
    interface StencilShadowDom {
    }
    interface StencilStyleScoped {
    }
    interface StencilStyleShadow {
    }
    interface StencilStyleShadowVars {
    }
    interface StencilWatchMultipleProp {
        "color": string;
        "size": number;
    }
    interface StencilWatchProp {
        "birthYear": number;
    }
}
export interface StencilEmitEventCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLStencilEmitEventElement;
}
declare global {
    interface HTMLStencilArrayPropElement extends Components.StencilArrayProp, HTMLStencilElement {
    }
    var HTMLStencilArrayPropElement: {
        prototype: HTMLStencilArrayPropElement;
        new (): HTMLStencilArrayPropElement;
    };
    interface HTMLStencilBooleanPropElement extends Components.StencilBooleanProp, HTMLStencilElement {
    }
    var HTMLStencilBooleanPropElement: {
        prototype: HTMLStencilBooleanPropElement;
        new (): HTMLStencilBooleanPropElement;
    };
    interface HTMLStencilEmitEventElementEventMap {
        "timeUpdated": number;
    }
    interface HTMLStencilEmitEventElement extends Components.StencilEmitEvent, HTMLStencilElement {
        addEventListener<K extends keyof HTMLStencilEmitEventElementEventMap>(type: K, listener: (this: HTMLStencilEmitEventElement, ev: StencilEmitEventCustomEvent<HTMLStencilEmitEventElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLStencilEmitEventElementEventMap>(type: K, listener: (this: HTMLStencilEmitEventElement, ev: StencilEmitEventCustomEvent<HTMLStencilEmitEventElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLStencilEmitEventElement: {
        prototype: HTMLStencilEmitEventElement;
        new (): HTMLStencilEmitEventElement;
    };
    interface HTMLStencilFirstComponentElement extends Components.StencilFirstComponent, HTMLStencilElement {
    }
    var HTMLStencilFirstComponentElement: {
        prototype: HTMLStencilFirstComponentElement;
        new (): HTMLStencilFirstComponentElement;
    };
    interface HTMLStencilHostElementElement extends Components.StencilHostElement, HTMLStencilElement {
    }
    var HTMLStencilHostElementElement: {
        prototype: HTMLStencilHostElementElement;
        new (): HTMLStencilHostElementElement;
    };
    interface HTMLStencilInternalStateElement extends Components.StencilInternalState, HTMLStencilElement {
    }
    var HTMLStencilInternalStateElement: {
        prototype: HTMLStencilInternalStateElement;
        new (): HTMLStencilInternalStateElement;
    };
    interface HTMLStencilInternalStateReactiveElement extends Components.StencilInternalStateReactive, HTMLStencilElement {
    }
    var HTMLStencilInternalStateReactiveElement: {
        prototype: HTMLStencilInternalStateReactiveElement;
        new (): HTMLStencilInternalStateReactiveElement;
    };
    interface HTMLStencilListenEventElement extends Components.StencilListenEvent, HTMLStencilElement {
    }
    var HTMLStencilListenEventElement: {
        prototype: HTMLStencilListenEventElement;
        new (): HTMLStencilListenEventElement;
    };
    interface HTMLStencilObjectPropElement extends Components.StencilObjectProp, HTMLStencilElement {
    }
    var HTMLStencilObjectPropElement: {
        prototype: HTMLStencilObjectPropElement;
        new (): HTMLStencilObjectPropElement;
    };
    interface HTMLStencilPrivateMethodElement extends Components.StencilPrivateMethod, HTMLStencilElement {
    }
    var HTMLStencilPrivateMethodElement: {
        prototype: HTMLStencilPrivateMethodElement;
        new (): HTMLStencilPrivateMethodElement;
    };
    interface HTMLStencilPropComponentElement extends Components.StencilPropComponent, HTMLStencilElement {
    }
    var HTMLStencilPropComponentElement: {
        prototype: HTMLStencilPropComponentElement;
        new (): HTMLStencilPropComponentElement;
    };
    interface HTMLStencilPropValidationElement extends Components.StencilPropValidation, HTMLStencilElement {
    }
    var HTMLStencilPropValidationElement: {
        prototype: HTMLStencilPropValidationElement;
        new (): HTMLStencilPropValidationElement;
    };
    interface HTMLStencilPublicMethodElement extends Components.StencilPublicMethod, HTMLStencilElement {
    }
    var HTMLStencilPublicMethodElement: {
        prototype: HTMLStencilPublicMethodElement;
        new (): HTMLStencilPublicMethodElement;
    };
    interface HTMLStencilRequiredPropElement extends Components.StencilRequiredProp, HTMLStencilElement {
    }
    var HTMLStencilRequiredPropElement: {
        prototype: HTMLStencilRequiredPropElement;
        new (): HTMLStencilRequiredPropElement;
    };
    interface HTMLStencilShadowDomElement extends Components.StencilShadowDom, HTMLStencilElement {
    }
    var HTMLStencilShadowDomElement: {
        prototype: HTMLStencilShadowDomElement;
        new (): HTMLStencilShadowDomElement;
    };
    interface HTMLStencilStyleScopedElement extends Components.StencilStyleScoped, HTMLStencilElement {
    }
    var HTMLStencilStyleScopedElement: {
        prototype: HTMLStencilStyleScopedElement;
        new (): HTMLStencilStyleScopedElement;
    };
    interface HTMLStencilStyleShadowElement extends Components.StencilStyleShadow, HTMLStencilElement {
    }
    var HTMLStencilStyleShadowElement: {
        prototype: HTMLStencilStyleShadowElement;
        new (): HTMLStencilStyleShadowElement;
    };
    interface HTMLStencilStyleShadowVarsElement extends Components.StencilStyleShadowVars, HTMLStencilElement {
    }
    var HTMLStencilStyleShadowVarsElement: {
        prototype: HTMLStencilStyleShadowVarsElement;
        new (): HTMLStencilStyleShadowVarsElement;
    };
    interface HTMLStencilWatchMultiplePropElement extends Components.StencilWatchMultipleProp, HTMLStencilElement {
    }
    var HTMLStencilWatchMultiplePropElement: {
        prototype: HTMLStencilWatchMultiplePropElement;
        new (): HTMLStencilWatchMultiplePropElement;
    };
    interface HTMLStencilWatchPropElement extends Components.StencilWatchProp, HTMLStencilElement {
    }
    var HTMLStencilWatchPropElement: {
        prototype: HTMLStencilWatchPropElement;
        new (): HTMLStencilWatchPropElement;
    };
    interface HTMLElementTagNameMap {
        "stencil-array-prop": HTMLStencilArrayPropElement;
        "stencil-boolean-prop": HTMLStencilBooleanPropElement;
        "stencil-emit-event": HTMLStencilEmitEventElement;
        "stencil-first-component": HTMLStencilFirstComponentElement;
        "stencil-host-element": HTMLStencilHostElementElement;
        "stencil-internal-state": HTMLStencilInternalStateElement;
        "stencil-internal-state-reactive": HTMLStencilInternalStateReactiveElement;
        "stencil-listen-event": HTMLStencilListenEventElement;
        "stencil-object-prop": HTMLStencilObjectPropElement;
        "stencil-private-method": HTMLStencilPrivateMethodElement;
        "stencil-prop-component": HTMLStencilPropComponentElement;
        "stencil-prop-validation": HTMLStencilPropValidationElement;
        "stencil-public-method": HTMLStencilPublicMethodElement;
        "stencil-required-prop": HTMLStencilRequiredPropElement;
        "stencil-shadow-dom": HTMLStencilShadowDomElement;
        "stencil-style-scoped": HTMLStencilStyleScopedElement;
        "stencil-style-shadow": HTMLStencilStyleShadowElement;
        "stencil-style-shadow-vars": HTMLStencilStyleShadowVarsElement;
        "stencil-watch-multiple-prop": HTMLStencilWatchMultiplePropElement;
        "stencil-watch-prop": HTMLStencilWatchPropElement;
    }
}
declare namespace LocalJSX {
    interface StencilArrayProp {
        "users"?: string[];
    }
    interface StencilBooleanProp {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
    }
    interface StencilEmitEvent {
        "onTimeUpdated"?: (event: StencilEmitEventCustomEvent<number>) => void;
    }
    interface StencilFirstComponent {
    }
    interface StencilHostElement {
        "open"?: boolean;
    }
    interface StencilInternalState {
    }
    interface StencilInternalStateReactive {
    }
    interface StencilListenEvent {
    }
    interface StencilObjectProp {
        "user"?: User;
    }
    interface StencilPrivateMethod {
    }
    interface StencilPropComponent {
        "name"?: string;
    }
    interface StencilPropValidation {
        "name"?: string;
    }
    interface StencilPublicMethod {
    }
    interface StencilRequiredProp {
        "name": string;
    }
    interface StencilShadowDom {
    }
    interface StencilStyleScoped {
    }
    interface StencilStyleShadow {
    }
    interface StencilStyleShadowVars {
    }
    interface StencilWatchMultipleProp {
        "color"?: string;
        "size"?: number;
    }
    interface StencilWatchProp {
        "birthYear"?: number;
    }
    interface IntrinsicElements {
        "stencil-array-prop": StencilArrayProp;
        "stencil-boolean-prop": StencilBooleanProp;
        "stencil-emit-event": StencilEmitEvent;
        "stencil-first-component": StencilFirstComponent;
        "stencil-host-element": StencilHostElement;
        "stencil-internal-state": StencilInternalState;
        "stencil-internal-state-reactive": StencilInternalStateReactive;
        "stencil-listen-event": StencilListenEvent;
        "stencil-object-prop": StencilObjectProp;
        "stencil-private-method": StencilPrivateMethod;
        "stencil-prop-component": StencilPropComponent;
        "stencil-prop-validation": StencilPropValidation;
        "stencil-public-method": StencilPublicMethod;
        "stencil-required-prop": StencilRequiredProp;
        "stencil-shadow-dom": StencilShadowDom;
        "stencil-style-scoped": StencilStyleScoped;
        "stencil-style-shadow": StencilStyleShadow;
        "stencil-style-shadow-vars": StencilStyleShadowVars;
        "stencil-watch-multiple-prop": StencilWatchMultipleProp;
        "stencil-watch-prop": StencilWatchProp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stencil-array-prop": LocalJSX.StencilArrayProp & JSXBase.HTMLAttributes<HTMLStencilArrayPropElement>;
            "stencil-boolean-prop": LocalJSX.StencilBooleanProp & JSXBase.HTMLAttributes<HTMLStencilBooleanPropElement>;
            "stencil-emit-event": LocalJSX.StencilEmitEvent & JSXBase.HTMLAttributes<HTMLStencilEmitEventElement>;
            "stencil-first-component": LocalJSX.StencilFirstComponent & JSXBase.HTMLAttributes<HTMLStencilFirstComponentElement>;
            "stencil-host-element": LocalJSX.StencilHostElement & JSXBase.HTMLAttributes<HTMLStencilHostElementElement>;
            "stencil-internal-state": LocalJSX.StencilInternalState & JSXBase.HTMLAttributes<HTMLStencilInternalStateElement>;
            "stencil-internal-state-reactive": LocalJSX.StencilInternalStateReactive & JSXBase.HTMLAttributes<HTMLStencilInternalStateReactiveElement>;
            "stencil-listen-event": LocalJSX.StencilListenEvent & JSXBase.HTMLAttributes<HTMLStencilListenEventElement>;
            "stencil-object-prop": LocalJSX.StencilObjectProp & JSXBase.HTMLAttributes<HTMLStencilObjectPropElement>;
            "stencil-private-method": LocalJSX.StencilPrivateMethod & JSXBase.HTMLAttributes<HTMLStencilPrivateMethodElement>;
            "stencil-prop-component": LocalJSX.StencilPropComponent & JSXBase.HTMLAttributes<HTMLStencilPropComponentElement>;
            "stencil-prop-validation": LocalJSX.StencilPropValidation & JSXBase.HTMLAttributes<HTMLStencilPropValidationElement>;
            "stencil-public-method": LocalJSX.StencilPublicMethod & JSXBase.HTMLAttributes<HTMLStencilPublicMethodElement>;
            "stencil-required-prop": LocalJSX.StencilRequiredProp & JSXBase.HTMLAttributes<HTMLStencilRequiredPropElement>;
            "stencil-shadow-dom": LocalJSX.StencilShadowDom & JSXBase.HTMLAttributes<HTMLStencilShadowDomElement>;
            "stencil-style-scoped": LocalJSX.StencilStyleScoped & JSXBase.HTMLAttributes<HTMLStencilStyleScopedElement>;
            "stencil-style-shadow": LocalJSX.StencilStyleShadow & JSXBase.HTMLAttributes<HTMLStencilStyleShadowElement>;
            "stencil-style-shadow-vars": LocalJSX.StencilStyleShadowVars & JSXBase.HTMLAttributes<HTMLStencilStyleShadowVarsElement>;
            "stencil-watch-multiple-prop": LocalJSX.StencilWatchMultipleProp & JSXBase.HTMLAttributes<HTMLStencilWatchMultiplePropElement>;
            "stencil-watch-prop": LocalJSX.StencilWatchProp & JSXBase.HTMLAttributes<HTMLStencilWatchPropElement>;
        }
    }
}
