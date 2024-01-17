let precio = 0
let precio2 = 0
let pregunta

do {
    pregunta = prompt("¿Qué quieres ordenar hoy?\n 1- Completo\n 2- Hamburguesa\n 3- Pizza")

    switch (pregunta) {
        case "1":
            console.log("Elegiste Completo")
            alert("Elegiste Completo")
            
            do {
                pregunta = prompt("¿Qué tipo de Completo quieres?\n 1- Italiano $2000 \n 2- Barros Luco $2500 \n 3- Palta y mayo $1800")

                switch(pregunta){
                    case "1":
                        console.log("Elegiste Italiano")
                        alert("Elegiste Italiano")
                        precio = 2000
                        break
                    case "2":
                        console.log("Elegiste Barros Luco")
                        alert("Elegiste Barros Luco")
                        precio = 2500
                        break
                    case "3":
                        console.log("Elegiste Palta y mayo")
                        alert("Elegiste Palta y mayo")
                        precio = 1800
                        break
                    default:
                        console.log("Elegiste una opción no válida")
                        alert("Parece que elegiste algo que no está en el menú")
                }
            } while (pregunta !== "1" && pregunta !== "2" && pregunta !== "3")
            break;

        case "2":
            console.log("Elegiste Hamburguesa")
            alert("Elegiste Hamburguesa")

            do {
                pregunta = prompt("¿Qué tipo de Hamburguesa quieres?\n 1- Italiana $2500 \n 2- Solo queso $2000 \n 3- Tocino y queso $3000")

                switch(pregunta){
                    case "1":
                        console.log("Elegiste Italiana")
                        alert("Elegiste Italiana")
                        precio = 2500
                        break
                    case "2":
                        console.log("Elegiste Solo queso")
                        alert("Elegiste Solo queso")
                        precio = 2000
                        break
                    case "3":
                        console.log("Elegiste Tocino y queso")
                        alert("Elegiste Tocino y queso")
                        precio = 3000
                        break
                    default:
                        console.log("Elegiste una opción no válida")
                        alert("Parece que elegiste algo que no está en el menú")
                }
            } while (pregunta !== "1" && pregunta !== "2" && pregunta !== "3")
            break

        case "3":
            console.log("Elegiste Pizza")
            alert("Elegiste Pizza")

            do {
                pregunta = prompt("¿Qué tipo de Pizza quieres?\n 1- Napolitana $4000 \n 2- Pepperoni $3500 \n 3- Solo queso $3000")

                switch(pregunta){
                    case "1":
                        console.log("Elegiste Napolitana")
                        alert("Elegiste Napolitana")
                        precio = 4000
                        break
                    case "2":
                        console.log("Elegiste Peperoni")
                        alert("Elegiste Pepperoni")
                        precio = 3500
                        break
                    case "3":
                        console.log("Elegiste Solo queso")
                        alert("Elegiste  Solo queso")
                        precio = 3000
                        break
                    default:
                        alert("Parece que elegiste algo que no está en el menú")
                }
            } while (pregunta !== "1" && pregunta !== "2" && pregunta !== "3")
            break

        default:
            alert("Parece que elegiste algo que no está en el menú")
    }

} while (pregunta !== "1" && pregunta !== "2" && pregunta !== "3")

do {
    pregunta = prompt("¿Qué bebestible quieres?\n 1- Coca Cola $1200\n 2- Sprite $1200\n 3- Fanta $1200")

    switch(pregunta){
        case "1":
            console.log("Elegiste Coca Cola")
            alert("Elegiste Coca Cola")
            precio2 = 1200;
            break
        case "2":
            console.log("Elegiste Sprite")
            alert("Elegiste Sprite")
            precio2 = 1200
            break;
        case "3":
            console.log("Elegiste Fanta")
            alert("Elegiste Fanta")
            precio2 = 1200
            break
        default:
            console.log("Elegiste una opción no válida")
            alert("Parece que elegiste algo que no está en el menú")
    }

} while (pregunta !== "1" && pregunta !== "2" && pregunta !== "3")

if(pregunta !== "1" && pregunta !== "2" && pregunta !== "3"){
    alert("Elegiste una opción no válida")
}

function sumar(solo1, solo2){
    return solo1 + solo2
}

let precioFinal = sumar(precio, precio2)

console.log("El precio final es: ")
console.log(precioFinal)
alert("Precio a pagar: " + "$ " + precioFinal)

let nombre = prompt("Ingrese su nombre:")
let apellido = prompt("Ingrese su apellido:")

alert("Muchas gracias " + nombre + " " + apellido + ", su pedido está siendo procesado")