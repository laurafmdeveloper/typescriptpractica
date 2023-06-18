
 
export enum ProvinceList {

    Alava = "Alava",
    Albacete = "Albacete",
    Alicante = "Alicante",
    Almeria = "Almeria",
    Asturias = "Asturias",
    Avila = "Avila",
    Badajoz = "Badajoz",
    Barcelona = "Barcelona",
    Burgos = "Burgos",
    Caceres = "Caceres",
    Cadiz  = "Cadiz",
    Cantabria  = "Cantabria",
    Castellon  = "Castellon",
    CiudadReal  = "Ciudad Real",
    Cordoba  = "Cordoba",
    LaCoruna  = "La Coruña",
    Cuenca  = "Cuenca",
    Gerona  = "Gerona",
    Granada  = "Granada",
    Guadalajara  = "Guadalajara",
    Guipuzcoa  = "Guipuzcoa",
    Huelva  = "Huelva",
    Huesca  = "Huesca",
    IslasBaleares  = "Islas Baleares",
    Jaen  = "Jaen",
    Leon  = "Leon",
    Lerida  = "Lerida",
    Lugo  = "Lugo",
    Madrid  = "Madrid",
    Malaga  = "Malaga",
    Murcia  = "Murcia",
    Navarra  = "Navarra",
    Orense  = "Orense",
    Palencia  = "Palencia",
    LasPalmas  = "Las Palmas",
    Pontevedra  = "Pontevedra",
    LaRioja  = "La Rioja",
    Salamanca  = "Salamanca",
    Segovia  = "Segovia",
    Sevilla  = "Sevilla",
    Soria  = "Soria",
    Tarragona  = "Tarragona",
    SantaCruzDeTenerife  = "Santa Cruz de Tenerife",
    Teruel  = "Teruel",
    Toledo  = "Toledo",
    Valencia  = "Valencia",
    Valladolid  = "Valladolid",
    Vizcaya  = "Vizcaya",
    Zamora  = "Zamora",
    Zaragoza  = "Zaragoza",
};



export class Direction {
    
    
    private postalCode: String; // We choose String type because this variable is not made for making mathematical operations, just stores data
    private population: String; //enum
    private province: ProvinceList; //enum
    private street: String;
    private streetNumber: String; 
    private floor?: String; // opcional
    private door?: String;     // opcional!!!!!!!!!!! YO - door = letra ??






    constructor(
        postalCode: String,
        population: String,
        province: ProvinceList,
        street: String,  
        streetNumber: String,
        floor?: String, //floor is optional here
        door?: String   // optional
        ) {

        this.postalCode = postalCode;
        this.population = population;
        this.province = province;
        this.street = street;
        this.streetNumber = streetNumber;
        this.floor = floor;
        this.door = door;
    }


    // GETTERS AND SETTERS
    
    // postalCode: String
    get getPostalCode(): String{
        return this.postalCode;
    }

    set setPostalCode(newPC :String) {
        this.postalCode = newPC;
    }


    // province: ProvinceList
    get getProvince(): ProvinceList{
        return this.province;
    }

    set setProvince(newProvince :ProvinceList) {
        this.province = newProvince;
    }

    // population: String
    get getPopulation(): String{
        return this.population;
    }

    set setPopulation(newPopulation :String) {
        this.population = newPopulation;
    }


    // street: String
    get getStreet(): String{
        return this.street;
    }

    set setStreet(newStreet :String) {
        this.street = newStreet;
    }

    // streetNumber: String
    get getStreetNumber(): String{
        return this.streetNumber;
    }

    set setStreetNumber(newStreetNumber :String) {
        this.streetNumber = newStreetNumber;
    }

    // floor?
    // This property is optional, the returned data type can be a String or undefined (undefined in case it hasn't been created)
    // En el método get, al ser la propiedad opcional, puede devolver String | undefined 
    get getFloor(): String | undefined{
        return this.floor;
    }

    set setFloor(newFloor :String) {
        this.floor = newFloor;
    }


    // door?
    // This property is optional, the returned data type can be a String or undefined (undefined in case it hasn't been created)
    // En el método get, al ser la propiedad opcional, puede devolver String | undefined 
    get getDoor(): String | undefined{
        return this.door;
    }

    set setDoor(newDoor :String) {
        this.door = newDoor;
    }

    
    // OTHER METHODS

    // PRINT ALL INFO (to String)
    public getAllInfo(): String {
        let info =" DIRECTION \n";
        info +="postalCode: " + this.getPostalCode + "\n" +
            "population: " + this.getPopulation + "\n" +
            "province: " + this.getProvince + "\n" +
            "street: " + this.getStreet + ", nº " + this.getStreetNumber + "\n";

        // if these optional properties (floor and door) are Strings (= not undefined), add them to "info" variable
        if(this.floor != undefined){
            info +="floor: " + this.getFloor + "\n";
        } 

        if(this.door != undefined){
            info +="door: " + this.getDoor + "\n";
        }

        return info;
    }


};
