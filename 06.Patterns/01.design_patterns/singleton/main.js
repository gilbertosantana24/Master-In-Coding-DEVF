//Singleton este patron nos permite obtener siempre una unica instancia de una clase
//Cada nueva instancia de la clase terminara devolviendo la primer instancia creada originalmente

class Unica {
    constructor(nombre){
        this.nombre = nombre;
        //this.creada = true; //Lo hacemos para saber si una instancia ya fue creada

       // console.log(Unica.instancia)
        if(Unica.instancia){
            console.log("CREADA")
            return Unica.instancia
        }
        this.nombre = nombre;

        Unica.instancia = this;
    }
}

//vamos a crear nuestra instancias de esta clase

const a = new Unica('a');
const b = new Unica('b');
const c = new Unica("c");

