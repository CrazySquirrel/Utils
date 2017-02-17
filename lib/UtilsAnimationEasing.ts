"use strict";
/**
 * Different time animation functions
 */
export default class Easing {
  public static def = "easeOutQuad";

  public static isValidParams(t: number, b: number, c: number, d: number, s?: number): boolean {
    return (
        typeof t === "number" &&
        typeof b === "number" &&
        typeof c === "number" &&
        typeof d === "number" &&
        (
            typeof s === "undefined" ||
            typeof s === "number"
        ) &&
        t < d
    );
  }

  public static swing(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return Easing[Easing.def](t, b, c, d);
    } else {
      return NaN;
    }
  }

  public static easeInQuad(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return c * (t /= d) * t + b;
    } else {
      return NaN;
    }
  }

  public static easeOutQuad(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return -c * (t /= d) * (t - 2) + b;
    } else {
      return NaN;
    }
  }

  public static easeInOutQuad(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
      }
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    } else {
      return NaN;
    }
  }

  public static easeInCubic(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return c * (t /= d) * t * t + b;
    } else {
      return NaN;
    }
  }

  public static easeOutCubic(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    } else {
      return NaN;
    }
  }

  public static easeInOutCubic(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
      }
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    } else {
      return NaN;
    }
  }

  public static easeInQuart(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return c * (t /= d) * t * t * t + b;
    } else {
      return NaN;
    }
  }

  public static  easeOutQuart(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    } else {
      return NaN;
    }
  }

  public static easeInOutQuart(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
      }
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    } else {
      return NaN;
    }
  }

  public static easeInQuint(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return c * (t /= d) * t * t * t * t + b;
    } else {
      return NaN;
    }
  }

  public static easeOutQuint(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    } else {
      return NaN;
    }
  }

  public static easeInOutQuint(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
      }
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    } else {
      return NaN;
    }
  }

  public static easeInSine(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    } else {
      return NaN;
    }
  }

  public static easeOutSine(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    } else {
      return NaN;
    }
  }

  public static easeInOutSine(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    } else {
      return NaN;
    }
  }

  public static easeInExpo(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    } else {
      return NaN;
    }
  }

  public static easeOutExpo(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    } else {
      return NaN;
    }
  }

  public static easeInOutExpo(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      }
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    } else {
      return NaN;
    }
  }

  public static  easeInCirc(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    } else {
      return NaN;
    }
  }

  public static easeOutCirc(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    } else {
      return NaN;
    }
  }

  public static easeInOutCirc(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      }
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    } else {
      return NaN;
    }
  }

  public static  easeInElastic(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      let s = 1.70158;
      let p = 0;
      let a = c;
      if (t === 0) {
        return b;
      }
      if ((t /= d) === 1) {
        return b + c;
      }
      if (!p) {
        p = d * .3;
      }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else {
      return NaN;
    }
  }

  public static easeOutElastic(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      let s = 1.70158;
      let p = 0;
      let a = c;
      if (t === 0) {
        return b;
      }
      if ((t /= d) === 1) {
        return b + c;
      }
      if (!p) {
        p = d * .3;
      }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    } else {
      return NaN;
    }
  }

  public static  easeInOutElastic(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      let s = 1.70158;
      let p = 0;
      let a = c;
      if (t === 0) {
        return b;
      }
      if ((t /= d / 2) === 2) {
        return b + c;
      }
      if (!p) {
        p = d * (.3 * 1.5);
      }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      if (t < 1) {
        return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      }
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    } else {
      return NaN;
    }
  }

  public static easeInBack(t: number, b: number, c: number, d: number, s: number): number {
    if (Easing.isValidParams(t, b, c, d, s)) {
      if (s === undefined) {
        s = 1.70158;
      }
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    } else {
      return NaN;
    }
  }

  public static  easeOutBack(t: number, b: number, c: number, d: number, s: number): number {
    if (Easing.isValidParams(t, b, c, d, s)) {
      if (s === undefined) {
        s = 1.70158;
      }
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    } else {
      return NaN;
    }
  }

  public static easeInOutBack(t: number, b: number, c: number, d: number, s: number): number {
    if (Easing.isValidParams(t, b, c, d, s)) {
      if (s === undefined) {
        s = 1.70158;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
      }
      return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    } else {
      return NaN;
    }
  }

  public static  easeInBounce(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      return c - Easing.easeOutBounce(d - t, 0, c, d) + b;
    } else {
      return NaN;
    }
  }

  public static  easeOutBounce(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
      } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
      } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
      } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
      }
    } else {
      return NaN;
    }
  }

  public static easeInOutBounce(t: number, b: number, c: number, d: number): number {
    if (Easing.isValidParams(t, b, c, d)) {
      if (t < d / 2) {
        return Easing.easeInBounce(t * 2, 0, c, d) * .5 + b;
      }
      return Easing.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    } else {
      return NaN;
    }
  }
}
