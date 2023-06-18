"use strict";
// Importing classes and types (TelephoneTypeList, ProvinceList, Sex ) from other TypeScript archives
Object.defineProperty(exports, "__esModule", { value: true });
var mail_1 = require("./mail");
var phone_1 = require("./phone");
var direction_1 = require("./direction");
var person_1 = require("./person");
// Creating Direction objects
var d1 = new direction_1.Direction("50005", "Zaragoza", direction_1.ProvinceList.Zaragoza, "Calle Alfonso I", "12");
var d2FloorDoor = new direction_1.Direction("12345", "Antequera", direction_1.ProvinceList.Malaga, "La Plazuela", "1", "2º", "A");
var homerDir3 = new direction_1.Direction("346667", "Springfield", direction_1.ProvinceList.Alava, "Calle Principal", "24");
// Creating Mail objects
var mail1 = new mail_1.Mail(mail_1.MailTypeList.personal, "laura@gmail.com");
var homerMail = new mail_1.Mail(mail_1.MailTypeList.personal, "h@gmail.com");
// Creating Phone objects
var lauraPhone = new phone_1.Telephone(phone_1.TelephoneTypeList.mobile, "789456432");
var homerPhone = new phone_1.Telephone(phone_1.TelephoneTypeList.mobile, "789455588");
// Creating 3 Person registers:
var laura = new person_1.Person("Laura", "FM", 30, "123456789F", new Date("1993-04-01"), "rojo", person_1.Sex.female, [d1, d2FloorDoor], [mail1, new mail_1.Mail(mail_1.MailTypeList.work, "laurafmdeveloper@gmail.com")], [lauraPhone], ["ir a comprar pan", "nota 2"]);
var homer = new person_1.Person("Homer", "Simpson", 50, "222444666H", new Date("1973-02-01"), "azul", person_1.Sex.male, [homerDir3], [homerMail], [homerPhone], ["lisa necesita aparato", "no tengo seguro"]);
var lisa = new person_1.Person("Lisa", "Simpson", 10, "111333555L", new Date("2013-03-01"), "verde", person_1.Sex.female, [homerDir3], [new mail_1.Mail(mail_1.MailTypeList.personal, "lisa@gmail.com")], [new phone_1.Telephone(phone_1.TelephoneTypeList.mobile, "666111333")], ["tocar el saxo por la tarde", "ir a la huelga"]);
// 1) PRINTING 3 REGISTERS BY CONSOLE LOG
// Array of Person objects
var contactList = [laura, lisa, homer];
console.log("\n  PRINTING 3 REGISTERS BY CONSOLE LOG \n");
contactList.forEach(function (e) { return console.log(e.getPersonInfo()); });
console.log("\n\n");
// FUNCTION DECLARATIONS 
/**
 * Function that finds if a DNI is inside of an Array of Person obj.
 * If this DNI is in one Person of the array, it returns the Person inside of an array of length 1
 * If is not, it returns an empty array (length 0)
 */
function searchByDNI(searchedDNI, list) {
    var personFound = [];
    list.forEach(function (element) {
        if (element.getDNI === searchedDNI) {
            personFound.push(element);
            return personFound; // Person inside of an array of length 1
        }
    });
    return personFound; // empty array (length 0)
}
function printResult(result) {
    var _a, _b;
    if (result.length == 1) {
        console.log("The DNI " + ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.getDNI) + " belongs to " + ((_b = result[0]) === null || _b === void 0 ? void 0 : _b.getFullName()));
    }
    else {
        console.log("There's no person in the list that matches with the searched DNI");
    }
}
// FUNCTION DECLARATIONS - END
// Checking and printing some Person objects founded by their DNIs
var unlistedDNI = "101202303T";
printResult(searchByDNI("111333555L", contactList));
printResult(searchByDNI(homer.getDNI, contactList));
printResult(searchByDNI(unlistedDNI, contactList));
printResult(searchByDNI(laura.getDNI, contactList));
// 2) Search a Person by DNI and add a new direction, phone and email using class methods:
var searchedUser;
searchedUser = searchByDNI(laura.getDNI, contactList)[0];
// Modifying direction/address, mails and phone of one of the obj. Person
console.log("\n Modifying email, address and phone of one of the searched Person " + searchedUser.getFullName() + " \n");
// Adding a new direction 
console.log("Old directions: " + searchedUser.getDirectionsInfo());
searchedUser.addNewDirection(homerDir3);
console.log("New directions: " + searchedUser.getDirectionsInfo());
// Adding a new mail 
console.log("Old Mails: " + searchedUser.getMailsInfo());
searchedUser.addNewMail(new mail_1.Mail(mail_1.MailTypeList.personal, "newmail@gmail.es"));
console.log("New Mails: " + searchedUser.getMailsInfo());
// Adding a new phone number   
console.log("Old Phones: " + searchedUser.getPhonesInfo());
searchedUser.addNewPhone(new phone_1.Telephone(phone_1.TelephoneTypeList.other, "777888999"));
console.log("New Phones: " + searchedUser.getPhonesInfo());
// 3) PRINTING AGAIN THESE 3 OBJ. WITH MODIFIED DATA (direction/address, mails and phone):
console.log("\n  PRINTING 3 REGISTERS BY CONSOLE LOG - WITH  MODIFIED DATA \n");
contactList.forEach(function (e) { return console.log(e.getPersonInfo()); });
console.log("\n\n");
