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
exports.SoporteCamion = void 0;
var registro_1 = require("./registro");
var SoporteCamion = /** @class */ (function (_super) {
    __extends(SoporteCamion, _super);
    function SoporteCamion(tallerCamion, clienteCamion) {
        var _this = _super.call(this) || this;
        _this.tallerCamion = tallerCamion;
        _this.clienteCamion = clienteCamion;
        return _this;
    }
    return SoporteCamion;
}(registro_1.RegistroAutomotor));
exports.SoporteCamion = SoporteCamion;
