console.log("teste karalho")


const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const btnAddToCart = document.getElementById("add-to-cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItensConteiner = document.getElementById("cart-items");
const precoTotal = document.getElementById("cart-total");
const checkout = document.getElementById("checkout-btn"); 
const closeModal = document.getElementById("close-model-btn");
const cartCount = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

let cart = [];


//function para abrir carrinho
cartBtn.addEventListener("click", function(){
    updateCartModal()
   cartModal.style.display = "flex";
   
})

//function para fechar carrinho
cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal) {
        
        cartModal.style.display = "none";
    }
    console.log(event)
    })


closeModal.addEventListener("click", function(){
        cartModal.style.display = "none";
    })


    //implementando adicionar ao carrinho
    menu.addEventListener("click", function(event){

        let parentButton = event.target.closest(".add-to-cart-btn");

        if(parentButton){
           const name = parentButton.getAttribute("data-name");
           const price = parentButton.getAttribute("data-price");
            AddToCart(name,price);
        }

    });


    function AddToCart(name, price){

        const existingItem = cart.find(item => item.name === name);

        if(existingItem){
            existingItem.quantity += 1;
            
        }else{
        cart.push({
                name,
                price,
                quantity: 1 })
    }

    updateCartModal()
    
    cartModal.style.display = "flex";
    }

function updateCartModal(){

    cartItensConteiner.innerHTML="";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");

        cartItemElement.classList.add("flex","justify-between", "mb-4", "flex-col")
        cartItemElement.innerHTML =`
        <div class="flex items-center justify-between">
         <div >
          <p class="font-medium">${item.name}</p>
          <p>Qtd: ${item.price}</p>
          <p class="font-medium mt-2">(${item.quantity})</p>
         </div>
         
        <div>
        <button class="font-bold"><i class="fa-solid fa-trash"></i><button>
        </div>
        </div>
        `

        cartItensConteiner.appendChild(cartItemElement);
    })
    

}


