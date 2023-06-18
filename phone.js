"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telephone = exports.TelephoneTypeList = void 0;
var TelephoneTypeList;
(function (TelephoneTypeList) {
    TelephoneTypeList["mobile"] = "mobile";
    TelephoneTypeList["home"] = "home";
    TelephoneTypeList["work"] = "work";
    TelephoneTypeList["other"] = "other";
})(TelephoneTypeList = exports.TelephoneTypeList || (exports.TelephoneTypeList = {}));
;
var Telephone = /** @class */ (function () {
    //!!!!!!!!!! no se hacen operaciones mat con numeros telef
    function Telephone(telephoneType, telephoneNumber) {
        this.telephoneType = telephoneType;
        this.telephoneNumber = telephoneNumber;
    }
    Object.defineProperty(Telephone.prototype, "getTelephoneType", {
        // GETTERS AND SETTERS (accesors)
        get: function () {
            return this.telephoneType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telephone.prototype, "setTelephoneType", {
        set: function (value) {
            this.telephoneType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telephone.prototype, "getTelephoneNumber", {
        get: function () {
            return this.telephoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telephone.prototype, "setTelephoneNumber", {
        set: function (value) {
            this.telephoneNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    // OTHER METHODS
    // PRINT ALL INFO (to String)
    Telephone.prototype.getAllInfo = function () {
        return "Telephone type: " + this.getTelephoneType + " Number: " + this.getTelephoneNumber + "\n";
    };
    return Telephone;
}());
exports.Telephone = Telephone;
