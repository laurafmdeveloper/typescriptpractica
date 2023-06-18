"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = exports.ProvinceList = void 0;
var ProvinceList;
(function (ProvinceList) {
    ProvinceList["Alava"] = "Alava";
    ProvinceList["Albacete"] = "Albacete";
    ProvinceList["Alicante"] = "Alicante";
    ProvinceList["Almeria"] = "Almeria";
    ProvinceList["Asturias"] = "Asturias";
    ProvinceList["Avila"] = "Avila";
    ProvinceList["Badajoz"] = "Badajoz";
    ProvinceList["Barcelona"] = "Barcelona";
    ProvinceList["Burgos"] = "Burgos";
    ProvinceList["Caceres"] = "Caceres";
    ProvinceList["Cadiz"] = "Cadiz";
    ProvinceList["Cantabria"] = "Cantabria";
    ProvinceList["Castellon"] = "Castellon";
    ProvinceList["CiudadReal"] = "Ciudad Real";
    ProvinceList["Cordoba"] = "Cordoba";
    ProvinceList["LaCoruna"] = "La Coru\u00F1a";
    ProvinceList["Cuenca"] = "Cuenca";
    ProvinceList["Gerona"] = "Gerona";
    ProvinceList["Granada"] = "Granada";
    ProvinceList["Guadalajara"] = "Guadalajara";
    ProvinceList["Guipuzcoa"] = "Guipuzcoa";
    ProvinceList["Huelva"] = "Huelva";
    ProvinceList["Huesca"] = "Huesca";
    ProvinceList["IslasBaleares"] = "Islas Baleares";
    ProvinceList["Jaen"] = "Jaen";
    ProvinceList["Leon"] = "Leon";
    ProvinceList["Lerida"] = "Lerida";
    ProvinceList["Lugo"] = "Lugo";
    ProvinceList["Madrid"] = "Madrid";
    ProvinceList["Malaga"] = "Malaga";
    ProvinceList["Murcia"] = "Murcia";
    ProvinceList["Navarra"] = "Navarra";
    ProvinceList["Orense"] = "Orense";
    ProvinceList["Palencia"] = "Palencia";
    ProvinceList["LasPalmas"] = "Las Palmas";
    ProvinceList["Pontevedra"] = "Pontevedra";
    ProvinceList["LaRioja"] = "La Rioja";
    ProvinceList["Salamanca"] = "Salamanca";
    ProvinceList["Segovia"] = "Segovia";
    ProvinceList["Sevilla"] = "Sevilla";
    ProvinceList["Soria"] = "Soria";
    ProvinceList["Tarragona"] = "Tarragona";
    ProvinceList["SantaCruzDeTenerife"] = "Santa Cruz de Tenerife";
    ProvinceList["Teruel"] = "Teruel";
    ProvinceList["Toledo"] = "Toledo";
    ProvinceList["Valencia"] = "Valencia";
    ProvinceList["Valladolid"] = "Valladolid";
    ProvinceList["Vizcaya"] = "Vizcaya";
    ProvinceList["Zamora"] = "Zamora";
    ProvinceList["Zaragoza"] = "Zaragoza";
})(ProvinceList = exports.ProvinceList || (exports.ProvinceList = {}));
;
var Direction = /** @class */ (function () {
    function Direction(postalCode, population, province, street, streetNumber, floor, //floor is optional here
    door // optional
    ) {
        this.postalCode = postalCode;
        this.population = population;
        this.province = province;
        this.street = street;
        this.streetNumber = streetNumber;
        this.floor = floor;
        this.door = door;
    }
    Object.defineProperty(Direction.prototype, "getPostalCode", {
        // GETTERS AND SETTERS
        // postalCode: String
        get: function () {
            return this.postalCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "setPostalCode", {
        set: function (newPC) {
            this.postalCode = newPC;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "getProvince", {
        // province: ProvinceList
        get: function () {
            return this.province;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "setProvince", {
        set: function (newProvince) {
            this.province = newProvince;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "getPopulation", {
        // population: String
        get: function () {
            return this.population;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "setPopulation", {
        set: function (newPopulation) {
            this.population = newPopulation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "getStreet", {
        // street: String
        get: function () {
            return this.street;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "setStreet", {
        set: function (newStreet) {
            this.street = newStreet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "getStreetNumber", {
        // streetNumber: String
        get: function () {
            return this.streetNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "setStreetNumber", {
        set: function (newStreetNumber) {
            this.streetNumber = newStreetNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "getFloor", {
        // floor?
        // This property is optional, the returned data type can be a String or undefined (undefined in case it hasn't been created)
        // En el método get, al ser la propiedad opcional, puede devolver String | undefined 
        get: function () {
            return this.floor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "setFloor", {
        set: function (newFloor) {
            this.floor = newFloor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "getDoor", {
        // door?
        // This property is optional, the returned data type can be a String or undefined (undefined in case it hasn't been created)
        // En el método get, al ser la propiedad opcional, puede devolver String | undefined 
        get: function () {
            return this.door;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "setDoor", {
        set: function (newDoor) {
            this.door = newDoor;
        },
        enumerable: false,
        configurable: true
    });
    // OTHER METHODS
    // PRINT ALL INFO (to String)
    Direction.prototype.getAllInfo = function () {
        var info = " DIRECTION \n";
        info += "postalCode: " + this.getPostalCode + "\n" +
            "population: " + this.getPopulation + "\n" +
            "province: " + this.getProvince + "\n" +
            "street: " + this.getStreet + ", nº " + this.getStreetNumber + "\n";
        // if these optional properties (floor and door) are Strings (= not undefined), add them to "info" variable
        if (this.floor != undefined) {
            info += "floor: " + this.getFloor + "\n";
        }
        if (this.door != undefined) {
            info += "door: " + this.getDoor + "\n";
        }
        return info;
    };
    return Direction;
}());
exports.Direction = Direction;
;
