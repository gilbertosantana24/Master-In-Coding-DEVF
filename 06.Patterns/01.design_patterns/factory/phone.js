// FACTORY: NOS AYUDA A CREAR UN OBJETO DE MEJOR FORMA 
// CUANDO CREAMOS MUCHOS OBJETOS ESPECIFICAMENTE PARA UNA CLASE

class Phone {
    constructor(
        //Parametros para crear un modelo celular
        serialNum,
        model = "Generic",
        procesador = "Generic",
        RAM = "4 GB",
        width = 67.3,
        heigth = 138,
        resolution = "750 x 1334"
    )
    {
        this.serialNum = serialNum;
        this.config = {
            model,
            procesador,
            RAM,
            width,
            heigth,
            resolution
        };
    }

    dial(num){
        console.log(`Now dialing ${num}...`);
    }

    displayConfig(){
        console.log(this.config);
    }

}

module.export = Phone 