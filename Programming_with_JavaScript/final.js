const exp = require("constants");

const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]

const tax = 1.20;

function getPrices(taxBoolean) {
    if (typeof(taxBoolean) != "boolean") {
        console.log("You need to pass a boolean to the getPrices call!");
        return;
    }
    for (dish of dishData) {
        console.log(`Dish: ${dish.name} Price: $${taxBoolean ? dish.price * tax : dish.price}`);
    }
    
}

function getDiscount(taxBoolean, guests)
{
    getPrices(taxBoolean);
    if (typeof(guests) == "number" && guests > 0 && guests < 30)
    {
        let discount = 0;
        if (guests < 5)
            discount = 5;
        else
            discount = 10;
        console.log(`Discount is: $${discount}`);
    }
    else
    {
        console.log('The second argument must be a number between 0 and 30');
    }
}