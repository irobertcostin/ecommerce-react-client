




function addCart(cart, item) {


    let semn = false;

    cart.forEach(element => {
        if (element.id == item.id) {
            element.quantity += 1;
            semn = true;
        }
    });

    if (semn == false) {
        cart.push(item);
    }

    return cart;

}


function eraseQuantify(cart, item) {

    let arr = cart.filter(e => e.id !== item.id)




    return arr;

}




function eraseCart(cart, item) {

    let arr = cart.filter(e => e.id !== item.id)

    return arr;

}



function totalAmount(cart) {


    // console.log(cart);

    let sum = 0;

    cart.forEach(element => {

        let a = element.quantity * element.price
        sum += a;


    })

    return sum;
}


function totalAmountItems(cart) {


    // console.log(cart);

    let sum = 0;

    cart.forEach(element => {


        sum += element.quantity;


    })

    return sum;
}


function increaseAmount(item) {

    item.quantity += 1;


}

function decreaseAmount(item) {

    console.log(`before: ${item.quantity}`);

    item.quantity -= 1;

    console.log(`after: ${item.quantity}`);

}


export { addCart, eraseCart, totalAmount, totalAmountItems, increaseAmount, decreaseAmount }