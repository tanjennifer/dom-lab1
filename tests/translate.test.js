const { translate } = require("../src/translate");

describe("translate function", ()=> {
    test(`translate("apple") → "appleway"`, ()=>{
        expect(translate("apple")).toBe("appleway");
    });
    test(`translate("else") → "elseway"`, ()=>{
        expect(translate("else")).toBe("elseway");
    });
    test(`translate("index") → "indexway"`, ()=>{
        expect(translate("index")).toBe("indexway");
    });
    test(`translate("oxygen") → "oxygenway"`, ()=>{
        expect(translate("oxygen")).toBe("oxygenway");
    });
    test(`translate("umbrella") → "umbrellaway"`, ()=>{
        expect(translate("umbrella")).toBe("umbrellaway");
    });
    test(`translate("giraffe") → "iraffegay"`, ()=>{
        expect(translate("giraffe")).toBe("iraffegay");
    });
    test(`translate("speed") → "eedspay"`, ()=>{
        expect(translate("speed")).toBe("eedspay");
    });
    test(`translate("strap") → "apstray"`, ()=>{
        expect(translate("strap")).toBe("apstray");
    });
});