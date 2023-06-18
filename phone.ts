export enum TelephoneTypeList {mobile= "mobile", home = "home", work= "work", other="other"};




export class Telephone {
    private telephoneType: TelephoneTypeList; // ????? o enum: trabajo, casa, etc

                //ojo type es una paralabra reservada?
    private telephoneNumber: String; // aclarar por qué (no hay que sumar los nºs)
                                        //!!!!!!!!!! no se hacen operaciones mat con numeros telef



    
    constructor(telephoneType: TelephoneTypeList, telephoneNumber: String){

        this.telephoneType = telephoneType;
        this.telephoneNumber = telephoneNumber;
    }



    // GETTERS AND SETTERS (accesors)

    public get getTelephoneType(): TelephoneTypeList {
        return this.telephoneType;
    }
    public set setTelephoneType(value: TelephoneTypeList) {
        this.telephoneType = value;
    }

    public get getTelephoneNumber(): String {
        return this.telephoneNumber;
    }
    public set setTelephoneNumber(value: String) {
        this.telephoneNumber = value;
    }


    // OTHER METHODS

    // PRINT ALL INFO (to String)
    public getAllInfo(): String {
        return "Telephone type: " + this.getTelephoneType + " Number: " + this.getTelephoneNumber + "\n";
    }



}
