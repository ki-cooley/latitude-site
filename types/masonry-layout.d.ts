declare module 'masonry-layout' {
  interface MasonryOptions {
    itemSelector?: string;
    columnWidth?: number | string;
    gutter?: number | string;
    percentPosition?: boolean;
    stamp?: string;
    fitWidth?: boolean;
    originLeft?: boolean;
    originTop?: boolean;
    containerStyle?: object;
    transitionDuration?: string;
    stagger?: number | string;
    resize?: boolean;
    initLayout?: boolean;
  }

  class Masonry {
    constructor(element: Element | string, options?: MasonryOptions);
    layout(): void;
    layoutItems(items: Element[], isStill?: boolean): void;
    stamp(elements: Element[]): void;
    unstamp(elements: Element[]): void;
    appended(elements: Element[]): void;
    prepended(elements: Element[]): void;
    addItems(elements: Element[]): void;
    remove(elements: Element[]): void;
    reloadItems(): void;
    destroy(): void;
    getItemElements(): Element[];
    on(eventName: string, listener: Function): Masonry;
    off(eventName: string, listener: Function): Masonry;
    once(eventName: string, listener: Function): Masonry;
  }

  export = Masonry;
}
