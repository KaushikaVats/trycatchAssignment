 
let cart = [];

function addToCart(name, price, quantity) {
    
    if (!name || typeof name !== 'string') {
        throw new Error("Product name is required.");
    }

    
    if (typeof price !== 'number' || price <= 0) {
        throw new Error("Invalid product price.");
    }


    if (quantity <= 0 || !Number.isInteger(quantity)) {
        throw new Error("Invalid quantity.");
    }

    
    const product = {
        name: name,
        price: price,
        quantity: quantity
    };

    cart.push(product);  
    console.log("Product added to cart:", product);
    return product;
}


function checkout() {

    if (cart.length === 0) {
        throw new Error("Cart is empty. Add items before checkout.");
    }

    
    console.log("Checking out", cart.length, "items from the cart...");
    cart = []; 
    console.log("Checkout complete. Cart is now empty.");
}


try {
    
    addToCart("Smartphone", 799.99, 8);  // Adds a valid product to the cart
    addToCart("watch", 199.99, 1.9);  // Adds another valid product

    
    checkout(); 
    checkout();
} catch (error) {
    console.error(error.message);
}
    
//2.

const user={
    "user123": "password123",
    "user2": "securePassword",
    "admin": "adminPass"
}

function login(username,password){
   if(!username){
    throw new Error("Username is required")
   }

   if(!password){
    throw new Error("Paasword is required")
   }
   if(!user[username] || user[username] !== password){
      throw new Error("Invalid username or password")
   }
   console.log("LOGIN SUCCESSFULL",username);

   
}

try{
    login("user123","password123");
    //login("","password456");
    //login("user456" ,"");
    login("invalidUser" , "invalidPassword");
}catch(error){
    console.log(error.message);
    
}

//3.

// const userDetails ={
//     "1234-5678-9812-3456 ":" 12/25",
//     "4567-0987-0010-5321"  : "05/22",
//     "9876-5432-1098-7654" : "01/20"
 
//}
function processPayment(amount, cardNumber, expirationDate) {
    
    if (amount <= 0) {
        throw new Error("Invalid payment amount.");
    }

    
    if (!cardNumber) {
        throw new Error("Invalid card number.");
    }


    const [month, year] = expirationDate.split('/').map(Number);
    const currentDate = new Date();
    const expiryDate = new Date(`20${year}`, month - 1);

    if (!expirationDate || expiryDate < currentDate) {
        throw new Error("Invalid expiration date.");
    }

    
    console.log("Payment processed successfully.");
    return { success: true, message: "Payment processed successfully." };
}