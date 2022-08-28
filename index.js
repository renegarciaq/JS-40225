let totalCompra = 0
let productoSeleccionado = parseInt(prompt("Ingresa el numero del producto que quieres comprar: 1.Aros - 2.Anillo - 3.Collar - 4.Reloj"))
let seguirComprando = true
let decision

while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
        totalCompra = totalCompra + 50
    } else if (productoSeleccionado === 2) {
        totalCompra = totalCompra + 100
    } else if (productoSeleccionado === 3) {
        totalCompra = totalCompra + 150
    } else if (productoSeleccionado === 4) {
        totalCompra = totalCompra + 200
    } else {
        productoSeleccionado = parseInt(prompt("Ingresa un numero de la lista: 1.Aros - 2.Anillo - 3.Collar - 4.Reloj"))
        continue
    }

    decision = parseInt(prompt("Deseas agregar otro producto? 1.Si - 2.No"))
    if (decision === 1) {
        productoSeleccionado = parseInt(prompt("Ingresa el numero del producto que quieres comprar: 1.Aros - 2.Anillo - 3.Collar - 4.Reloj"))
    } else if (decision === 2) {
        seguirComprando = false
    }
}

alert("el valor neto es de: " + totalCompra)

function precioDescuento(valor) {
    let descuento = 0
    if (valor <= 100) {
        descuento = 10
    } else if (valor > 100 && valor <= 200) {
        descuento = 15
    } else if (valor > 200 && valor <= 300) {
        descuento = 20
    } else {
        descuento = 25
    }
    let valorDescuento = valor * (descuento / 100)
    valor = valor - valorDescuento
    return valor
}
let valorConDescuento = precioDescuento(totalCompra)
alert("el total con descuento neto es de: " + valorConDescuento)

function precioConIva(valor) {
    const iva = valor * (19/100)
    return valor + iva
}

let valorFinalIva = precioConIva(valorConDescuento)
alert("El valor final con IVA es de: "+valorFinalIva)