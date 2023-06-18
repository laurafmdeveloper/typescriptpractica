"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = exports.MailTypeList = void 0;
var MailTypeList;
(function (MailTypeList) {
    MailTypeList["personal"] = "personal";
    MailTypeList["education"] = "education";
    MailTypeList["work"] = "work";
    MailTypeList["other"] = "other";
})(MailTypeList = exports.MailTypeList || (exports.MailTypeList = {}));
;
var Mail = /** @class */ (function () {
    function Mail(mailType, direction) {
        this.mailType = mailType;
        this.direction = direction;
    }
    Object.defineProperty(Mail.prototype, "getMailType", {
        // Methods
        // GETTERS AND SETTERS
        get: function () {
            return this.mailType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "setMailType", {
        set: function (value) {
            this.mailType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "getDirection", {
        get: function () {
            return this.direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "setDirection", {
        set: function (newDirection) {
            this.direction = newDirection;
        },
        enumerable: false,
        configurable: true
    });
    // OTHER METHODS
    // PRINT ALL INFO (to String)
    Mail.prototype.getAllInfo = function () {
        return "Mail type: " + this.getMailType + " - Direction: " + this.getDirection + "\n";
    };
    return Mail;
}());
exports.Mail = Mail;
