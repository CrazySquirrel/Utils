"use strict";
/**
 * Different time animation functions
 */
export default class Easing {
    public static def = "easeOutQuad";

    public static swing(t, b, c, d) {
        return Easing[Easing.def](t, b, c, d);
    }

    public static easeInQuad(t, b, c, d) {
        return c * (t /= d) * t + b;
    }

    public static easeOutQuad(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    }

    public static easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }

    public static easeInCubic(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    }

    public static easeOutCubic(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }

    public static easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }

    public static easeInQuart(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    }

    public static  easeOutQuart(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }

    public static easeInOutQuart(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }

    public static easeInQuint(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    }

    public static easeOutQuint(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }

    public static easeInOutQuint(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }

    public static easeInSine(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    }

    public static easeOutSine(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }

    public static easeInOutSine(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }

    public static easeInExpo(t, b, c, d) {
        return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }

    public static easeOutExpo(t, b, c, d) {
        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }

    public static easeInOutExpo(t, b, c, d) {
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
    }

    public static  easeInCirc(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }

    public static easeOutCirc(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }

    public static easeInOutCirc(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }

    public static  easeInElastic(t, b, c, d) {
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
    }

    public static easeOutElastic(t, b, c, d) {
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
    }

    public static  easeInOutElastic(t, b, c, d) {
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
    }

    public static easeInBack(t, b, c, d, s) {
        if (s === undefined) {
            s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }

    public static  easeOutBack(t, b, c, d, s) {
        if (s === undefined) {
            s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }

    public static easeInOutBack(t, b, c, d, s) {
        if (s === undefined) {
            s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }

    public static  easeInBounce(t, b, c, d) {
        return c - Easing.easeOutBounce(d - t, 0, c, d) + b;
    }

    public static  easeOutBounce(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    }

    public static easeInOutBounce(t, b, c, d) {
        if (t < d / 2) {
            return Easing.easeInBounce(t * 2, 0, c, d) * .5 + b;
        }
        return Easing.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
}
