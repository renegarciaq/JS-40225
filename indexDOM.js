let products = []
let cart = []
const select = document.getElementById('list')

class Product {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }
}
const aros = new Product("Aros", 50, '001');
const anillo = new Product("Anillo", 100, '002');
const collar = new Product("Collar", 150, '003');
const reloj = new Product("Reloj", 200, '004');

products.push(aros, anillo, collar, reloj)

products.forEach(Product=>{
    const option = document.createElement('option')
    option.innerText = `${Product.name}: $${Product.price}`
    select.append(option)
})

const button = document.createElement('button')
button.innerText = "Agregar al carrito"
document.body.append(button)

const button2 = document.createElement('button')
button2.innerText = "Ir al Carrito"
document.body.append(button2)

button.onclick = () => {
    const selectedProduct = products[select.selectedIndex]
    cart.push(selectedProduct)
}

button2.onclick = () => {
    let totalCompra = 0
    cart.forEach((prod)=>{
        totalCompra = totalCompra + prod.price
    })
    alert(`El precio final es ${totalCompra}`)
}