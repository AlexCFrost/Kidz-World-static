const addCartItems = document.querySelectorAll(".button")
const cartValue = document.getElementById("cart-value")
let cartCount = 0;
let totalPrice = 0;
let CartItems = []

addCartItems.forEach(button => {
    button.addEventListener('click',(event) => {
    let currentValue = parseInt(cartValue.textContent);
    cartValue.textContent = currentValue + 1;
    const h3tag = event.currentTarget.parentNode.previousElementSibling.querySelector('h3');
    const ptag = event.currentTarget.parentNode.querySelector('p')

    const productName = h3tag.textContent;
    const alredyHere = CartItems.find(obj => obj.productName === productName);
    if (alredyHere){
        alredyHere.quantity++
    }

    else{
        const newProduct = {
            productName: productName,
            quantity: 1,
        }
    CartItems.push(newProduct)
    }
    totalPrice = totalPrice+parseFloat(ptag.textContent.slice(1));
    });
});

document.getElementById('cart').addEventListener('click',() =>{
    CartItems.forEach((obj) => {
        console.log(obj)
    })
    console.log("The total payable amount is $"+totalPrice)
})











