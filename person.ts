
import { Direction } from "./direction";
import { Mail } from "./mail";
import { Telephone } from "./phone";

export enum Sex {male= "Male", female= "Female", intersex= "Intersex"};
export class Person {

    private name: String;
    private surname: String;
    private age: number; // number con limites de 0 a 150??
    private DNI: String;     // DNI es una constante
    private birthday: Date;
    private favouriteColor: String; // enum, hecadecimal rgb ????
    private sex: Sex; // enum
    private directions: Direction[]; //Array de dirs
    private mails: Mail[];
    private phones: Telephone[];
    private notes: String[];
                

    
    
    constructor(

        name: String,  
        surname: String, 
        age: number, 
                                    //person.ts - ojo cambio de orden DNI en obj PERSONA
        DNI: String, // NO OPCIONAL 
        birthday: Date, 
        favouriteColor: String, 
        sex: Sex, 
        directions: Direction[], 
        mails: Mail[], 
        phones: Telephone[],
        notes: String[]

    ) {
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
            this.DNI = DNI;   // no opcional    
    }

    // Getters AND Setters o ACCESORES ?
 
    // name: String
    public get getName(): String {
        return this.name;
    }
    public set setName(newName: String) {
        this.name = newName;
    }

    //surname: String
    public get getSurname(): String {
        return this.surname;
    }
    public set setSurname(value: String) {
        this.surname = value;
    }

    
    // age: number
    public get getAge(): number {
        return this.age;
    }
    public set setAge(value: number) {
        this.age = value;
    }


    //  DNI: String 
    public get getDNI(): String {
        return this.DNI;
    }
    public set setDNI(value: String) {
        this.DNI = value;
    }
    
    
    // birthday: Date
    public get getBirthday(): Date {
        return this.birthday;
    }
    public set setBirthday(value: Date) {
        this.birthday = value;
    }


    // favouriteColor: String 
    public get getFavouriteColor(): String {
        return this.favouriteColor;
    }
    public set setFavouriteColor(value: String) {
        this.favouriteColor = value;
    }

    // sex: Sex 
    public get getSex(): Sex {
        return this.sex;
    }
    public set setSex(value: Sex) {
        this.sex = value;
    }


    // directions: Direction[]
    public get getDirections(): Direction[] {
        return this.directions;
    }
    public set setDirections(value: Direction[]) {
        this.directions = value;
    }
    
    
    
    // mails: Mail[]
    public get getMails(): Mail[] {
        return this.mails;
    }
    public set setMails(value: Mail[]) {
        this.mails = value;
    }
    
    
    
    // phones: Telephone[]
    public get getPhones(): Telephone[] {
        return this.phones;
    }
    public set setPhones(value: Telephone[]) {
        this.phones = value;
    }
    
    
    //notes: String[];
    public getNotes(): String[] {
        return this.notes;
    }
    public setNotes(value: String[]) {
        this.notes = value;
    }




    // OTHER METHODS

    public addNewPhone(newNumber: Telephone): void{

        let newList: Telephone[] = [];
        newList = newList.concat(this.getPhones, [newNumber]);
        this.setPhones = newList; 
    }


    public addNewDirection(newDir: Direction): void{

        let newList: Direction[] = [];
        newList = newList.concat(this.getDirections, [newDir]);
        this.setDirections = newList; 
    }

    public addNewMail(newMail: Mail): void{

        let newList: Mail[] = [];
        newList = newList.concat(this.getMails, [newMail]);
        this.setMails = newList; 
    }

    public getFullName(): String {
        return this.name + " " + this.surname;
    }
 
    // PRINT ALL INFO (to String)
       
    public getNotesInfo(): String {
        let accumulator ="";
        this.notes.forEach((element, index) =>  { accumulator += "Note " + (index + 1) + ": " + element + "\n";     })

        return accumulator;
    }

 
    public getPhonesInfo(): String {
        let accumulator ="";
        this.phones.forEach((element, index)  => accumulator +="\n(" + (index + 1) + ") " + element.getAllInfo());
        return accumulator;
    }


  
    public getMailsInfo(): String {
        let accumulator ="";
        this.mails.forEach((element, index)  => accumulator +="\n(" + (index + 1) + ") " + element.getAllInfo());
        return accumulator;
    }

     
    public getDirectionsInfo(): String {
        let accumulator ="";
         
        this.directions.forEach((element, index)  => accumulator +="\n(" + (index + 1) + ") " + element.getAllInfo());
        return accumulator;
    }
      
      
 
    public getPersonInfo(): String {
                
        let allInfo: String;
        allInfo ="\n\n - - - PERSON - - -\nNAME: " + this.name +
                "\nSURNAME: " + this.getSurname +
                "\nAGE: " + this.getAge +
                "\nDNI: " + this.getDNI +
                "\nBIRTHDAY: " + this.getBirthday.toDateString() +
                "\nFAVOURITE COLOR: " + this.getFavouriteColor +
                "\nSEX: " + this.getSex +
                "\nDIRECTIONS:\n"  +  this.getDirectionsInfo() +
                "\nMAILS:\n" + this.getMailsInfo()    + 
                "\nPHONES:\n" + this.getPhonesInfo()  +
                "\nNOTES:\n" + this.getNotesInfo()    + "\n _______________________ \n\n";


        return allInfo;
    }


}