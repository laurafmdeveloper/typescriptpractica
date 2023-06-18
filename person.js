"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Sex = void 0;
var Sex;
(function (Sex) {
    Sex["male"] = "Male";
    Sex["female"] = "Female";
    Sex["intersex"] = "Intersex";
})(Sex = exports.Sex || (exports.Sex = {}));
;
var Person = /** @class */ (function () {
    function Person(name, surname, age, 
    //person.ts - ojo cambio de orden DNI en obj PERSONA
    DNI, // NO OPCIONAL 
    birthday, favouriteColor, sex, directions, mails, phones, notes) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.birthday = birthday;
        this.favouriteColor = favouriteColor;
        this.sex = sex;
        this.directions = directions;
        this.mails = mails;
        this.phones = phones;
        this.notes = notes;
        this.DNI = DNI; // no opcional    
    }
    Object.defineProperty(Person.prototype, "getName", {
        // Getters AND Setters o ACCESORES ?
        // name: String
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (newName) {
            this.name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getSurname", {
        //surname: String
        get: function () {
            return this.surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setSurname", {
        set: function (value) {
            this.surname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getAge", {
        // age: number
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setAge", {
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getDNI", {
        //  DNI: String 
        get: function () {
            return this.DNI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setDNI", {
        set: function (value) {
            this.DNI = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getBirthday", {
        // birthday: Date
        get: function () {
            return this.birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setBirthday", {
        set: function (value) {
            this.birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getFavouriteColor", {
        // favouriteColor: String 
        get: function () {
            return this.favouriteColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setFavouriteColor", {
        set: function (value) {
            this.favouriteColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getSex", {
        // sex: Sex 
        get: function () {
            return this.sex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setSex", {
        set: function (value) {
            this.sex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getDirections", {
        // directions: Direction[]
        get: function () {
            return this.directions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setDirections", {
        set: function (value) {
            this.directions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getMails", {
        // mails: Mail[]
        get: function () {
            return this.mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setMails", {
        set: function (value) {
            this.mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getPhones", {
        // phones: Telephone[]
        get: function () {
            return this.phones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setPhones", {
        set: function (value) {
            this.phones = value;
        },
        enumerable: false,
        configurable: true
    });
    //notes: String[];
    Person.prototype.getNotes = function () {
        return this.notes;
    };
    Person.prototype.setNotes = function (value) {
        this.notes = value;
    };
    // OTHER METHODS
    Person.prototype.addNewPhone = function (newNumber) {
        var newList = [];
        newList = newList.concat(this.getPhones, [newNumber]);
        this.setPhones = newList;
    };
    Person.prototype.addNewDirection = function (newDir) {
        var newList = [];
        newList = newList.concat(this.getDirections, [newDir]);
        this.setDirections = newList;
    };
    Person.prototype.addNewMail = function (newMail) {
        var newList = [];
        newList = newList.concat(this.getMails, [newMail]);
        this.setMails = newList;
    };
    Person.prototype.getFullName = function () {
        return this.name + " " + this.surname;
    };
    // PRINT ALL INFO (to String)
    Person.prototype.getNotesInfo = function () {
        var accumulator = "";
        this.notes.forEach(function (element, index) { accumulator += "Note " + (index + 1) + ": " + element + "\n"; });
        return accumulator;
    };
    Person.prototype.getPhonesInfo = function () {
        var accumulator = "";
        this.phones.forEach(function (element, index) { return accumulator += "\n(" + (index + 1) + ") " + element.getAllInfo(); });
        return accumulator;
    };
    Person.prototype.getMailsInfo = function () {
        var accumulator = "";
        this.mails.forEach(function (element, index) { return accumulator += "\n(" + (index + 1) + ") " + element.getAllInfo(); });
        return accumulator;
    };
    Person.prototype.getDirectionsInfo = function () {
        var accumulator = "";
        this.directions.forEach(function (element, index) { return accumulator += "\n(" + (index + 1) + ") " + element.getAllInfo(); });
        return accumulator;
    };
    Person.prototype.getPersonInfo = function () {
        var allInfo;
        allInfo = "\n\n - - - PERSON - - -\nNAME: " + this.name +
            "\nSURNAME: " + this.getSurname +
            "\nAGE: " + this.getAge +
            "\nDNI: " + this.getDNI +
            "\nBIRTHDAY: " + this.getBirthday.toDateString() +
            "\nFAVOURITE COLOR: " + this.getFavouriteColor +
            "\nSEX: " + this.getSex +
            "\nDIRECTIONS:\n" + this.getDirectionsInfo() +
            "\nMAILS:\n" + this.getMailsInfo() +
            "\nPHONES:\n" + this.getPhonesInfo() +
            "\nNOTES:\n" + this.getNotesInfo() + "\n _______________________ \n\n";
        return allInfo;
    };
    return Person;
}());
exports.Person = Person;
