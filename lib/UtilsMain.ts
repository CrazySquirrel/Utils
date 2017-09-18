"use strict";
/**
 * Import interfaces
 */
import IError from "../interfaces/IError";
/**
 * Declare window interface
 */
declare const Error: IError;
/**
 * Main Utils class
 */
export default class Main {

  /**
   * Warning
   * @param messange
   * @return {string}
   */
  public static warn(messange: string) {
    if (
        typeof console === "object"
    ) {
      if (typeof console.warn === "function") {
        return messange;
      } else if (typeof console.log === "function") {
        return messange;
      }
    }
  }

  /**
   * Transfer static methods into the object
   * @param realObject
   * @param className
   */
  public static implementationStaticMethods(realObject: any, className?: string): void {
    if (
        !!realObject &&
        typeof realObject === "object"
    ) {
      const staticClass = realObject.constructor;

      if (typeof staticClass === "function") {

        const methods = Object.keys(staticClass);

        if (methods && methods.length > 0) {

          for (let j = 0; j < methods.length; j++) {
            const method = methods[j];

            if (typeof realObject[method] === "undefined") {

              realObject[method] = (...args) => {
                if (
                    typeof staticClass !== "undefined"
                ) {
                  Main.warn("That method was deprecated and soon will be removed. Please use " + (className || (staticClass && staticClass.name) || "Unknown") + "." + method + " method.");
                }
                return staticClass[method](...args);
              };
            }
          }
        }
      }
    }
  }

  /**
   * Get call stack trace
   * @return Array<Object>
   */
  public static stack(): any[] {
    const e: IError = new Error();
    return (
            e &&
            e.stack &&
            e.stack.split("\n").slice(5).map(
                (s) => {
                  if (!s) {
                    return {};
                  }
                  let match: any = (/^(.*)@(.*)\.js:([0-9]+):([0-9]+)$/ig).exec(s);
                  if (match) {
                    if (match[1]) {
                      match[1] = (/([^\/<]+)/ig).exec(match[1]);
                      if (match[1]) {
                        match[1] = match[1][0];
                      }
                    }
                    return {
                      column: match[4] || "",
                      file: match[2] || "",
                      line: match[3] || "",
                      method: match[1] || "",
                    };
                  }
                  match = (/^(.*)@(http|https):([^:]+):([0-9]+):([0-9]+)$/ig).exec(s);
                  if (match) {
                    return {
                      column: match[5] || "",
                      file: match[3] || "",
                      line: match[4] || "",
                      method: (match[1] + ":" + match[2]) || "",
                    };
                  }
                  match = (/^(.*)@(.*):([0-9]+):([0-9]+)$/ig).exec(s);
                  if (match) {
                    return {
                      column: match[4] || "",
                      file: match[2] || "",
                      line: match[3] || "",
                      method: match[1] || "",
                    };

                  }
                  match = (/^\s+at\s([^(]+)\s\((.*):([0-9]+):([0-9]+)\)$/ig).exec(s);
                  if (match) {
                    return {
                      column: match[4] || "",
                      file: match[2] || "",
                      line: match[3] || "",
                      method: match[1] || "",
                    };
                  }
                  match = (/^\s+at\s(.*):([0-9]+):([0-9]+)$/ig).exec(s);
                  if (match) {
                    return {
                      column: match[3] || "",
                      file: match[1] || "",
                      line: match[2] || "",
                      method: "",
                    };
                  }
                  return s;
                },
            )
        ) ||
        [];
  }

  /**
   * Get random ID
   * @return {string}
   */
  public static getUID(): string {
    return Math.random().toString(36).substring(2);
  }
}
