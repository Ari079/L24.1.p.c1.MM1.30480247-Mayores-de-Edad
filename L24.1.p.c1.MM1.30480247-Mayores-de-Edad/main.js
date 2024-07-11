class Personas{
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad
    }
}

class Procesos{
    constructor(){
        this.mayoresEdad = 0,
        this.menoresEdad = 0,
        this.contadorPersonas = 0
    }
    procesarPersonas(p){
        this.contadorPersonas++
        if(p.edad >= 18){
            this.mayoresEdad++
        }else{
            this.menoresEdad++
        }
    }

    porcentajeMayoresEdad(){
        return  ((this.mayoresEdad / this.contadorPersonas) * 100).toFixed(2) + "%"
    }
}

let persona1 = new Personas("Luis", 15)
let persona2 = new Personas("Ana", 19)
let persona3 = new Personas("José", 21)
let persona4 = new Personas("Carmen", 17)
let persona5 = new Personas("Rosa", 18)
let persona6 = new Personas("José", 22)
let persona7 = new Personas("María", 17)
let persona8 = new Personas("Luz", 19)
let persona9 = new Personas("Rafael", 23)
let persona10 = new Personas("Liz", 15)
let persona11 = new Personas("Marcos", 20)
let persona12 = new Personas("Leo", 16)

let proceso = new Procesos()

proceso.procesarPersonas(persona1)
proceso.procesarPersonas(persona2)
proceso.procesarPersonas(persona3)
proceso.procesarPersonas(persona4)
proceso.procesarPersonas(persona5)
proceso.procesarPersonas(persona6)
proceso.procesarPersonas(persona7)
proceso.procesarPersonas(persona8)
proceso.procesarPersonas(persona9)
proceso.procesarPersonas(persona10)
proceso.procesarPersonas(persona11)
proceso.procesarPersonas(persona12)

let salida = document.getElementById('app')
salida.innerHTML = `

Cantidad de personas: ${proceso.contadorPersonas}<br>
Cantidad de personas mayor de edad: ${proceso.mayoresEdad}<br>
Porcentaje de personas mayor de edad: ${proceso.porcentajeMayoresEdad()}<br>

`