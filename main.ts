// Importing classes and types (TelephoneTypeList, ProvinceList, Sex ) from other TypeScript archives
 
import { MailTypeList, Mail } from "./mail";
import {TelephoneTypeList, Telephone } from "./phone";
import {ProvinceList, Direction} from "./direction";
import { Sex, Person } from "./person";

  




// Creating Direction objects
let d1 = new Direction("50005", "Zaragoza", ProvinceList.Zaragoza, "Calle Alfonso I", "12");
let d2FloorDoor = new Direction("12345", "Antequera", ProvinceList.Malaga, "La Plazuela", "1", "2º", "A");
let homerDir3= new Direction("346667", "Springfield", ProvinceList.Alava, "Calle Principal", "24");

// Creating Mail objects
let mail1 = new Mail(MailTypeList.personal, "laura@gmail.com");
let homerMail = new Mail(MailTypeList.personal, "h@gmail.com");

// Creating Phone objects
let lauraPhone = new Telephone(TelephoneTypeList.mobile, "789456432");
let homerPhone = new Telephone(TelephoneTypeList.mobile, "789455588");



 
// Creating 3 Person registers:

let laura = new Person("Laura", "FM", 30, 
                                "123456789F", 
                                new Date("1993-04-01"),
                               "rojo", 
                                Sex.female, 
                                [d1, d2FloorDoor],
                                [mail1, new Mail(MailTypeList.work, "laurafmdeveloper@gmail.com")], 
                                [lauraPhone], 
                                ["ir a comprar pan", "nota 2"]); 

let homer = new Person("Homer", "Simpson", 50, 
                                "222444666H", 
                                new Date("1973-02-01"),
                               "azul", 
                                Sex.male, 
                                [homerDir3],
                                [homerMail], 
                                [homerPhone], 
                                ["lisa necesita aparato", "no tengo seguro"]); 

let lisa = new Person("Lisa", "Simpson", 10, 
                                "111333555L", 
                                new Date("2013-03-01"),
                               "verde", 
                                Sex.female, 
                                [homerDir3],
                                [new Mail(MailTypeList.personal, "lisa@gmail.com")], 
                                [ new Telephone(TelephoneTypeList.mobile, "666111333")], 
                                ["tocar el saxo por la tarde", "ir a la huelga"]); 



                                
// 1) PRINTING 3 REGISTERS BY CONSOLE LOG

// Array of Person objects
let contactList: Person[] = [laura, lisa, homer];

console.log("\n  PRINTING 3 REGISTERS BY CONSOLE LOG \n");
contactList.forEach( e => console.log(e.getPersonInfo()));

console.log("\n\n");




// FUNCTION DECLARATIONS 
 
/**
 * Function that finds if a DNI is inside of an Array of Person obj. 
 * If this DNI is in one Person of the array, it returns the Person inside of an array of length 1
 * If is not, it returns an empty array (length 0)
 */
function searchByDNI(searchedDNI:String, list: Person[]): Person[]{
    let personFound: Person[] = [];
    list.forEach(element => {
        
        if(element.getDNI === searchedDNI){
            personFound.push(element);
            return personFound; // Person inside of an array of length 1
        }
    })
    return personFound; // empty array (length 0)
    

}

function printResult(result: Person[]): void {
    if(result.length == 1){
        console.log("The DNI " + result[0]?.getDNI + " belongs to " + result[0]?.getFullName());
    } else {
        console.log("There's no person in the list that matches with the searched DNI");
    }
}

// FUNCTION DECLARATIONS - END



// Checking and printing some Person objects founded by their DNIs
let unlistedDNI ="101202303T";

printResult(searchByDNI("111333555L", contactList));
printResult(searchByDNI(homer.getDNI, contactList));
printResult(searchByDNI( unlistedDNI , contactList));
printResult(searchByDNI(laura.getDNI, contactList));


// 2) Search a Person by DNI and add a new direction, phone and email using class methods:
let searchedUser: Person;
searchedUser = searchByDNI(laura.getDNI, contactList)[0];
// Modifying direction/address, mails and phone of one of the obj. Person
console.log("\n Modifying email, address and phone of one of the searched Person " + searchedUser.getFullName() + " \n");


// Adding a new direction 
console.log("Old directions: " + searchedUser.getDirectionsInfo());
searchedUser.addNewDirection(homerDir3);
console.log("New directions: " + searchedUser.getDirectionsInfo());



// Adding a new mail 
console.log("Old Mails: " + searchedUser.getMailsInfo());
searchedUser.addNewMail(new Mail(MailTypeList.personal, "newmail@gmail.es"));
console.log("New Mails: " + searchedUser.getMailsInfo());


// Adding a new phone number   
console.log("Old Phones: " + searchedUser.getPhonesInfo());
searchedUser.addNewPhone(new Telephone(TelephoneTypeList.other, "777888999"));
console.log("New Phones: " + searchedUser.getPhonesInfo());


 // 3) PRINTING AGAIN THESE 3 OBJ. WITH MODIFIED DATA (direction/address, mails and phone):

 console.log("\n  PRINTING 3 REGISTERS BY CONSOLE LOG - WITH  MODIFIED DATA \n");
contactList.forEach( e => console.log(e.getPersonInfo()));

console.log("\n\n");











