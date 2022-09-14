let total = 0
let selectedItem = parseInt(prompt("Ingresa el numero del producto que quieres comprar: 1.Aros - 2.Anillo - 3.Collar - 4.Reloj"))
let keepShopping = true
let cart
let products = []

class Product {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }
}
const aros = new Product("Aros", 50, 1);
const anillo = new Product("Anillo", 100, 2);
const collar = new Product("Collar", 150, 3);
const reloj = new Product("Reloj", 200, 4);

products.push(aros, anillo, collar, reloj)


while (keepShopping === true) {
    const requestedProduct = products.find(prod => prod.id === selectedItem)
    if (requestedProduct) {
        total = total + requestedProduct.price
    }
    else {
        selectedItem = parseInt(prompt("Ingresa un numero de la lista: 1.Aros - 2.Anillo - 3.Collar - 4.Reloj"))
        continue
    }

    cart = parseInt(prompt("Deseas agregar otro producto? 1.Si - 2.No"))
    if (cart === 1) {
        selectedItem = parseInt(prompt("Ingresa el numero del producto que quieres comprar: 1.Aros - 2.Anillo - 3.Collar - 4.Reloj"))
    } else if (cart === 2) {
        keepShopping = false
    }
}

alert("el total neto es de: " + total)

function discountPrice(valor) {
    let discount = 0
    if (valor <= 100) {
        discount = 10
    } else if (valor > 100 && valor <= 200) {
        discount = 15
    } else if (valor > 200 && valor <= 300) {
        discount = 20
    } else {
        discount = 25
    }
    let discountValue = valor * (discount / 100)
    valor = valor - discountValue
    return Math.round(valor)
}
let valorConDescuento = discountPrice(total)
alert("el total con descuento neto es de: " + valorConDescuento)

function precioConIva(valor) {
    const iva = valor * (19 / 100)
    return Math.round(valor + iva)
}

let valorFinalIva = precioConIva(valorConDescuento)
alert("El total final con IVA es de: " + valorFinalIva)
