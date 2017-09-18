"use strict";

/**
 * The storage interface
 */
interface IWindow {
  addEventListener?: any;
  attachEvent?: any;
  getComputedStyle?: any;

  document?: any;
  Utils?: any;

  eventListenerAdded?: boolean;

  innerHeight?: number;
  innerWidth?: number;
  pageXOffset?: number;
  pageYOffset?: number;

  globalStorage?: any;

  screen?: Screen;

  devicePixelRatio?: number;

  Promise?: Promise<any>;
}

/**
 * Export the window interface
 */
export default IWindow;
