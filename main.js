

// Show me how to calculate the average price of all items. Please console.log the average.

var average = items.reduce(function(total, item){
  return total + item.price;
}, 0) /items.length;

console.log(average);


// Show me how to get an array of items that cost between $14.00 and $18.00 USD


var between = items.filter(function(item){
  return item.price > 14 && item.price < 18;
});

console.log(between);


// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.


var GBP = items.filter(function(item){
  return item.currency_code === "GBP";
});
console.log(GBP);
console.log(GBP[0].title + " costs $" + GBP[0].price);






// Show me how to find which items are made of wood. Please console.log the ones you find.

var wood = items.filter(function(item){
  return item.materials = "wood";
});
console.log(wood);



// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.


var materials = items.filter(function(total, item){
  return total + item.materials >= 8;
});
console.log(materials);


// Show me how to calculate how many items were made by their sellers

var sellers = items.filter(function(item){
  return item.who_made != "someone_else";
});
console.log(sellers);
