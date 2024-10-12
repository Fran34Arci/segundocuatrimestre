"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoporteMoto = void 0;
var registro_1 = require("./registro");
var SoporteMoto = /** @class */ (function (_super) {
    __extends(SoporteMoto, _super);
    function SoporteMoto(tallerMoto, clienteMoto) {
        var _this = _super.call(this) || this;
        _this.tallerMoto = tallerMoto;
        _this.clienteMoto = clienteMoto;
        return _this;
    }
    return SoporteMoto;
}(registro_1.RegistroAutomotor));
exports.SoporteMoto = SoporteMoto;
