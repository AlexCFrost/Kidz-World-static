const addCartItems = document.querySelectorAll(".button")
const cartValue = document.getElementById("cart-value")
var whatsAppApi = "https://api.whatsapp.com/send?phone=6374134070&text=Order%20details";
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

function whatsAppData(){
    CartItems.forEach((ele) =>{
      if (ele.quantity!==0){
      whatsAppApi+= '%0A' +ele.productName+ '%20'+ele.quantity
      }
    })
    whatsAppApi+= '%0A'+"The total amount is $"+totalPrice
  }

document.getElementById('cart').addEventListener('click',() =>{
    CartItems.forEach((obj) => {
        console.log(obj)
    })
    console.log("The total payable amount is $"+totalPrice)
whatsAppData()  
window.open(whatsAppApi)
})











