import Cookies from "js-cookie";




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




function decreaseCart(cart, item) {



    cart.forEach(element => {
        if (element.id == item.id) {

            if (element.quantity > 1) {
                element.quantity -= 1;

            }

        }
    });




    return cart;

}







function eraseCart(cart, item) {

    let arr = cart.filter(e => e.id !== item.id)

    return arr;

}



function totalAmount(cart) {


    // console.log(cart);

    let sum = 0;

    if (cart.length == 0) {
        return sum
    } else {
        cart.forEach(element => {

            let a = element.quantity * element.price
            sum += a;


        })
    }



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




export { addCart, eraseCart, totalAmount, totalAmountItems, increaseAmount, decreaseCart }