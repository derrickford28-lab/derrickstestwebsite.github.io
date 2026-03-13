
const products = [

{
name:"Gaming Mouse",
price:40
},

{
name:"Keyboard",
price:60
},

{
name:"Headset",
price:80
}

]

const container = document.getElementById("products")

products.forEach(product => {

const div = document.createElement("div")
div.className = "product"

div.innerHTML = `
<h2>${product.name}</h2>
<p>$${product.price}</p>
<button>Add to Cart</button>
`

container.appendChild(div)

})
