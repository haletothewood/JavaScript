var orderCount = 0

function takeOrder(crustType, topping) {
	orderCount = orderCount + 1;
	return('Order: ' + crustType + ' pizza topped with ' + topping);
}

function getSumTotal(itemCount) {
	return itemCount * 7.5;
}

console.log(takeOrder('Thin crust', 'extra cheese'))
console.log(takeOrder('Deep dish', 'meatballs'))
console.log(takeOrder('Thin crust', 'goats cheese'))

console.log(getSumTotal(orderCount))