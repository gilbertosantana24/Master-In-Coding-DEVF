const Phone = require("./phone")


//Se crea subclase que nos retorna un objeto
// de la clase principal o superclase que es Phone
class iPhoneXS{
    constructor(serialNum){
        return new Phone (
        serialNum,
        "iPhone XS",
        "A12",
        "4 GB",
        70.9,
        143.6,
        "1125 x 2436"
        )
    }
}

module.export = iPhoneXS