"use strict";
/**
 * Class for working with cookie
 */
export default class Cookie {

  public static regValidKey = new RegExp("([a-zA-Z0-9_-]{1,})", "i");

  /**
   * The method returns the flag whether supported this storage type or not
   * @returns {boolean}
   */
  public static isSupported(): boolean {
    return (
        typeof document === "object" &&
        typeof document.cookie === "string"
    );
  }

  /**
   * The method sets the value and returns true if it has been set
   * @param checkSupport {boolean}
   * @param key {string}
   * @param value {string}
   * @param expires {number}
   * @param path {string}
   * @param domain {string}
   * @param secure {boolean}
   * @return {boolean}
   */
  public static setItem(checkSupport: boolean = true,
                        key: string,
                        value: string,
                        expires: number = 30,
                        path: string = "/",
                        domain: string = location.hostname,
                        secure: boolean = (location.protocol === "https:")): boolean {
    try {
      /**
       * Validate input data
       */
      if (
          typeof checkSupport === "boolean" &&
          (
              typeof key === "string" &&
              Cookie.regValidKey.test(key)
          ) &&
          (
              typeof value === "string" &&
              (value === "" || Cookie.regValidKey.test(value))
          ) &&
          (
              typeof expires === "number" &&
              expires < 365
          ) &&
          typeof path === "string" &&
          (
              typeof domain === "string" &&
              domain.indexOf(location.hostname) !== -1
          ) &&
          (
              typeof secure === "boolean" &&
              secure === (location.protocol === "https:")
          )
      ) {
        /**
         * Validate input data
         */
        const a: any = document.createElement("a");
        a.href = "http://" + domain + path;
        if (
            a.hostname === domain ||
            a.path === path
        ) {
          /**
           * If that store is supported
           */
          if (!checkSupport || Cookie.isSupported()) {
            /**
             * Save cookies for 30 days
             * @type {Date}
             */
            const date: Date = new Date();
            date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
            const exp: string = date.toUTCString();
            /**
             * Encode value for store
             * @type {string}
             */
            value = encodeURIComponent(value);
            /**
             * Writing value to the document cookie storage
             * @type {string}
             */
            document.cookie = (
                key + "=" +
                value +
                ((exp) ? "; expires=" + exp : "") +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                ((secure) ? "; secure" : "")
            );
            /**
             * If all ok return true
             */
            return this.getItem(checkSupport, key) === decodeURIComponent(value);
          } else {
            /**
             * If cookie does not supported return false
             */
            return false;
          }
        } else {
          /**
           * If input data is not valid
           */
          return false;
        }
      } else {
        /**
         * If input data is not valid
         */
        return false;
      }
    } catch (e) {
      /**
       * If something goes wrong return false
       */
      return false;
    }
  }

  /**
   * The method reads the value and returns it or returns false if the value does not exist
   * @param checkSupport {boolean}
   * @param key {string}
   * @returns {string|boolean}
   */
  public static getItem(checkSupport: boolean = true,
                        key: string): string|boolean {
    try {
      /**
       * Validate input data
       */
      if (
          typeof checkSupport === "boolean" &&
          (
              typeof key === "string" &&
              Cookie.regValidKey.test(key)
          )
      ) {
        /**
         * If that store is supported
         */
        if (!checkSupport || Cookie.isSupported()) {
          /**
           * Get the array from document cookie split by ;
           * @type {string[]}
           */
          const arrCookie: string[] = document.cookie.split(";");
          /**
           * Iterate through the cookies
           */
          for (let j = 0; j < arrCookie.length; j++) {
            const i = arrCookie[j];
            /**
             * Trim and split each cookie by = for key value pare
             * @type {string[]}
             */
            const v: string[] = i.trim().split("=", 2);
            /**
             * If it is correct cookie key return the value
             */
            if (v[0] === key) {
              /**
               * If the value was found return the value
               */
              return decodeURIComponent(v[1]);
            }
          }
          /**
           * If the value was not found return false
           */
          return false;
        } else {
          /**
           * If cookie does not supported return false
           */
          return false;
        }
      } else {
        /**
         * If input data is not valid
         */
        return false;
      }
    } catch (e) {
      /**
       * If something goes wrong return false
       */
      return false;
    }
  }

  /**
   * The method removes the value and return true if the value does not exist
   * @param checkSupport {boolean}
   * @param key {string}
   * @returns {boolean}
   */
  public static removeItem(checkSupport: boolean = true,
                           key: string): boolean {
    try {
      /**
       * Validate input data
       */
      if (
          typeof checkSupport === "boolean" &&
          (
              typeof key === "string" &&
              Cookie.regValidKey.test(key)
          )
      ) {
        /**
         * If that store is supported
         */
        if (!checkSupport || Cookie.isSupported()) {
          /**
           * Set empty overdue value by key
           */
          Cookie.setItem(checkSupport, key, "", -1 * 24 * 60 * 60);
          /**
           * If all ok return true
           */
          return (Cookie.getItem(checkSupport, key) === false);
        } else {
          /**
           * If cookie does not supported return false
           */
          return false;
        }
      } else {
        /**
         * If input data is not valid
         */
        return false;
      }
    } catch (e) {
      /**
       * If something goes wrong return false
       */
      return false;
    }
  }

  /**
   * The method returns the array of string of available keys
   * @param checkSupport {boolean}
   * @returns {string[]}
   */
  public static getKeys(checkSupport: boolean = true): string[] {
    try {
      /**
       * Validate input data
       */
      if (
          typeof checkSupport === "boolean"
      ) {
        /**
         * If that store is supported
         */
        if (!checkSupport || Cookie.isSupported()) {
          /**
           * The array of available keys
           * @type {Array}
           */
          const arrKeys: string[] = [];
          /**
           * Get the array from document cookie split by ;
           * @type {string[]}
           */
          const arrCookie: string[] = document.cookie.split(";");
          /**
           * Iterate through the cookies
           */
          for (let j = 0; j < arrCookie.length; j++) {
            const i = arrCookie[j];
            /**
             * Trim and split each cookie by = for key value pare
             * @type {string[]}
             */
            const v: string[] = i.trim().split("=", 2);
            /**
             * Add key to the list
             */
            if (v[0]) {
              arrKeys.push(v[0]);
            }
          }
          return arrKeys;
        } else {
          /**
           * If cookie does not supported return false
           */
          return [];
        }
      } else {
        /**
         * If input data is not valid
         */
        return [];
      }
    } catch (e) {
      /**
       * If something goes wrong return false
       */
      return [];
    }
  }

  /**
   * The method cleans the storage and return true if it is empty
   * @param checkSupport {boolean}
   * @returns {boolean}
   */
  public static clear(checkSupport: boolean = true): boolean {
    try {
      /**
       * Validate input data
       */
      if (
          typeof checkSupport === "boolean"
      ) {
        /**
         * If that store is supported
         */
        if (!checkSupport || Cookie.isSupported()) {

          const arrKeys = Cookie.getKeys(checkSupport);

          if (arrKeys) {

            for (let j = 0; j < arrKeys.length; j++) {
              const i = arrKeys[j];

              Cookie.removeItem(checkSupport, i);
            }
          }
          /**
           * If all ok return true
           */
          return (Cookie.getKeys(checkSupport).length === 0);
        } else {
          /**
           * If cookie does not supported return false
           */
          return true;
        }
      } else {
        /**
         * If input data is not valid
         */
        return false;
      }
    } catch (e) {
      /**
       * If something goes wrong return false
       */
      return false;
    }
  }
}
