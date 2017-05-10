"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import Utils from "../lib/Utils";
import UtilsBrowser from "../lib/UtilsBrowser";

describe("UtilsBrowser", () => {

  const testBrowsers = () => {
    const opera1 = UtilsBrowser.isOpera();
    const opera2 = Utils.Browser.isOpera();

    expect(typeof(opera1)).toEqual("boolean");
    expect(typeof(opera2)).toEqual("boolean");

    expect(opera1).toEqual(opera2);

    const operaNew1 = UtilsBrowser.isOperaNew();
    const operaNew2 = Utils.Browser.isOperaNew();

    expect(typeof(operaNew1)).toEqual("boolean");
    expect(typeof(operaNew2)).toEqual("boolean");

    expect(operaNew1).toEqual(operaNew2);

    const msie1 = UtilsBrowser.isMSIE();
    const msie2 = Utils.Browser.isMSIE();

    expect(typeof(msie1)).toEqual("boolean");
    expect(typeof(msie2)).toEqual("boolean");

    expect(msie1).toEqual(msie2);

    const msieNew1 = UtilsBrowser.isMSIENew();
    const msieNew2 = Utils.Browser.isMSIENew();

    expect(typeof(msieNew1)).toEqual("boolean");
    expect(typeof(msieNew2)).toEqual("boolean");

    expect(msieNew1).toEqual(msieNew2);

    const chrome1 = UtilsBrowser.isChrome();
    const chrome2 = Utils.Browser.isChrome();

    expect(typeof(chrome1)).toEqual("boolean");
    expect(typeof(chrome2)).toEqual("boolean");

    expect(chrome1).toEqual(chrome2);

    const safari1 = UtilsBrowser.isSafari();
    const safari2 = Utils.Browser.isSafari();

    expect(typeof(safari1)).toEqual("boolean");
    expect(typeof(safari2)).toEqual("boolean");

    expect(safari1).toEqual(safari2);

    const firefox1 = UtilsBrowser.isFirefox();
    const firefox2 = Utils.Browser.isFirefox();

    expect(typeof(firefox1)).toEqual("boolean");
    expect(typeof(firefox2)).toEqual("boolean");

    expect(firefox1).toEqual(firefox2);

    const browsers = {
      "Opera": opera1,
      "Opera New": operaNew1,
      "MSIE": msie1,
      "MSIE New": msieNew1,
      "Chrome": chrome1,
      "Safari": safari1,
      "Firefox": firefox1,
    };

    let isBrowserDetected = false;

    for (const browser in browsers) {
      if (isBrowserDetected) {
        expect(browsers[browser]).toEqual(false);
      } else if (browsers[browser]) {
        isBrowserDetected = true;

        let version1;
        let version2;
        const version3 = UtilsBrowser.getVersion();

        switch (browser) {
          case "Opera":
            version1 = UtilsBrowser.getOperaVersion();
            version2 = Utils.Browser.getOperaVersion();
            break;
          case "Opera New":
            version1 = UtilsBrowser.getOperaNewVersion();
            version2 = Utils.Browser.getOperaNewVersion();
            break;
          case "MSIE":
            version1 = UtilsBrowser.getMSIEVersion();
            version2 = Utils.Browser.getMSIEVersion();
            break;
          case "MSIE New":
            version1 = UtilsBrowser.getMSIENewVersion();
            version2 = Utils.Browser.getMSIENewVersion();
            break;
          case "Chrome":
            version1 = UtilsBrowser.getChromeVersion();
            version2 = Utils.Browser.getChromeVersion();
            break;
          case "Safari":
            version1 = UtilsBrowser.getSafariVersion();
            version2 = Utils.Browser.getSafariVersion();
            break;
          case "Firefox":
            version1 = UtilsBrowser.getFirefoxVersion();
            version2 = Utils.Browser.getFirefoxVersion();
            break;
          default:
        }

        expect(typeof(version1)).toEqual("string");
        expect(typeof(version2)).toEqual("string");

        expect(version1).toEqual(version2);
        expect(version1).toEqual(version3);
      }
    }
  };

  const testBrowsersType = () => {
    const isWebKit1 = UtilsBrowser.isWebKit();
    const isWebKit2 = Utils.Browser.isWebKit();

    expect(typeof(isWebKit1)).toEqual("boolean");
    expect(typeof(isWebKit2)).toEqual("boolean");

    expect(isWebKit1).toEqual(isWebKit2);

    const isGecko1 = UtilsBrowser.isGecko();
    const isGecko2 = Utils.Browser.isGecko();

    expect(typeof(isGecko1)).toEqual("boolean");
    expect(typeof(isGecko2)).toEqual("boolean");

    expect(isGecko1).toEqual(isGecko2);

    const isAndroid1 = UtilsBrowser.isAndroid();
    const isAndroid2 = Utils.Browser.isAndroid();

    expect(typeof(isAndroid1)).toEqual("boolean");
    expect(typeof(isAndroid2)).toEqual("boolean");

    expect(isAndroid1).toEqual(isAndroid2);

    const isLinux1 = UtilsBrowser.isLinux();
    const isLinux2 = Utils.Browser.isLinux();

    expect(typeof(isLinux1)).toEqual("boolean");
    expect(typeof(isLinux2)).toEqual("boolean");

    expect(isLinux1).toEqual(isLinux2);
  };

  const testOtherBrowsers = () => {
    const isOther1 = UtilsBrowser.isOther();
    const isOther2 = Utils.Browser.isOther();

    expect(typeof(isOther1)).toEqual("boolean");
    expect(typeof(isOther2)).toEqual("boolean");

    expect(isOther1).toEqual(isOther2);

    const getOtherName1 = UtilsBrowser.getOtherName();
    const getOtherName2 = Utils.Browser.getOtherName();

    expect(typeof(getOtherName1)).toEqual("string");
    expect(typeof(getOtherName2)).toEqual("string");

    expect(getOtherName1).toEqual(getOtherName2);

    const getOtherVersion1 = UtilsBrowser.getOtherVersion();
    const getOtherVersion2 = Utils.Browser.getOtherVersion();

    expect(typeof(getOtherVersion1)).toEqual("string");
    expect(typeof(getOtherVersion2)).toEqual("string");

    expect(getOtherVersion1).toEqual(getOtherVersion2);
  };

  it("UtilsBrowser", () => {
    expect(typeof(UtilsBrowser)).toEqual("function");
  });

  it("UtilsBrowser.getInfo", () => {
    const info1 = UtilsBrowser.getInfo();
    const info2 = Utils.Browser.getInfo();

    expect(Object.keys(info1)).toBeArray(["browser", "mobile", "version"]);

    expect(typeof(info1.browser)).toEqual("string");
    expect(typeof(info1.mobile)).toEqual("boolean");
    expect(typeof(info1.version)).toEqual("string");

    expect(info1.browser).toEqual(UtilsBrowser.getName());
    expect(info1.mobile).toEqual(UtilsBrowser.isMobile());
    expect(info1.version).toEqual(UtilsBrowser.getVersion());

    expect(info1).toEqual(info2);
  });

  it("UtilsBrowser.getName", () => {
    const name1 = UtilsBrowser.getName();
    const name2 = Utils.Browser.getName();

    expect(typeof(name1)).toEqual("string");
    expect(typeof(name2)).toEqual("string");

    expect(name1).toEqual(name2);
  });

  it("UtilsBrowser.getVersion", () => {
    const version1 = UtilsBrowser.getVersion();
    const version2 = Utils.Browser.getVersion();

    expect(typeof(version1)).toEqual("string");
    expect(typeof(version2)).toEqual("string");

    expect(version1).toEqual(version2);
  });

  it("UtilsBrowser.trimVersion", () => {
    const version1 = UtilsBrowser.getVersion();
    const version2 = Utils.Browser.getVersion();

    const trimVersion1 = UtilsBrowser.trimVersion(version1);
    const trimVersion2 = Utils.Browser.trimVersion(version2);

    expect(typeof(trimVersion1)).toEqual("string");
    expect(typeof(trimVersion2)).toEqual("string");

    expect(trimVersion1).toEqual(trimVersion2);

    const paramsValues = [undefined, null, true, 123, "test", trimVersion1];

    for (let j = 0; j < paramsValues.length; j++) {
      const paramsValue = paramsValues[j];

      const trimVersion = UtilsBrowser.trimVersion(paramsValue);

      expect(typeof(trimVersion)).toEqual("string");

      if (paramsValue === "test") {
        expect(trimVersion).toEqual("test");
      } else if (paramsValue === trimVersion1) {
        expect(trimVersion).toEqual(trimVersion1);
      } else {
        expect(trimVersion).toEqual("");
      }
    }
  });

  it("UtilsBrowser.isMobile", () => {
    const mobile1 = UtilsBrowser.isMobile();
    const mobile2 = Utils.Browser.isMobile();

    expect(typeof(mobile1)).toEqual("boolean");
    expect(typeof(mobile2)).toEqual("boolean");

    expect(mobile1).toEqual(mobile2);

    const tablet1 = UtilsBrowser.isTabletPC();
    const tablet2 = Utils.Browser.isTabletPC();

    expect(typeof(tablet1)).toEqual("boolean");
    expect(typeof(tablet2)).toEqual("boolean");

    expect(tablet1).toEqual(tablet2);

    if (mobile1) {
      expect(tablet1).toEqual(false);
    }
  });

  it("UtilsBrowser.isOpera", () => {
    testBrowsers();
  });

  it("UtilsBrowser.getOperaVersion", () => {
    testBrowsers();
  });

  it("UtilsBrowser.isOperaNew", () => {
    testBrowsers();
  });

  it("UtilsBrowser.getOperaNewVersion", () => {
    testBrowsers();
  });

  it("UtilsBrowser.isMSIE", () => {
    testBrowsers();
  });

  it("UtilsBrowser.getMSIEVersion", () => {
    testBrowsers();
  });

  it("UtilsBrowser.isMSIENew", () => {
    testBrowsers();
  });

  it("UtilsBrowser.getMSIENewVersion", () => {
    testBrowsers();
  });

  it("UtilsBrowser.isChrome", () => {
    testBrowsers();
  });

  it("UtilsBrowser.getChromeVersion", () => {
    testBrowsers();
  });

  it("UtilsBrowser.isSafari", () => {
    testBrowsers();
  });

  it("UtilsBrowser.getSafariVersion", () => {
    testBrowsers();
  });

  it("UtilsBrowser.isFirefox", () => {
    testBrowsers();
  });

  it("UtilsBrowser.getFirefoxVersion", () => {
    testBrowsers();
  });

  it("UtilsBrowser.isOther", () => {
    testOtherBrowsers();
  });

  it("UtilsBrowser.getOtherName", () => {
    testOtherBrowsers();
  });

  it("UtilsBrowser.getOtherVersion", () => {
    testOtherBrowsers();
  });

  it("UtilsBrowser.isSupported", () => {
    const isSupported1 = UtilsBrowser.isSupported();
    const isSupported2 = Utils.Browser.isSupported();

    expect(typeof(isSupported1)).toEqual("boolean");
    expect(typeof(isSupported2)).toEqual("boolean");

    expect(isSupported1).toEqual(isSupported2);

    expect(isSupported1).toEqual(true);
  });

  it("UtilsBrowser.isWebKit", () => {
    testBrowsersType();
  });

  it("UtilsBrowser.isGecko", () => {
    testBrowsersType();
  });

  it("UtilsBrowser.isAndroid", () => {
    testBrowsersType();
  });

  it("UtilsBrowser.isLinux", () => {
    testBrowsersType();
  });

  it("UtilsBrowser.isTabletPC", () => {
    const mobile1 = UtilsBrowser.isMobile();
    const mobile2 = Utils.Browser.isMobile();

    expect(typeof(mobile1)).toEqual("boolean");
    expect(typeof(mobile2)).toEqual("boolean");

    expect(mobile1).toEqual(mobile2);

    const tablet1 = UtilsBrowser.isTabletPC();
    const tablet2 = Utils.Browser.isTabletPC();

    expect(typeof(tablet1)).toEqual("boolean");
    expect(typeof(tablet2)).toEqual("boolean");

    expect(tablet1).toEqual(tablet2);

    if (tablet1) {
      expect(mobile1).toEqual(false);
    }
  });
});
