

function totalSpent(orders) {


    let sum = 0;

    orders.forEach(element => {
        sum += element.amount
    });


    return sum;


}









export { totalSpent }