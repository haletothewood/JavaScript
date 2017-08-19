var orderCount = 0
var orderNum = 0

function takeOrder(crustType, topping) {
	orderCount = orderCount + 1;
	orderNum = orderNum + 1;
	return('Order ' + orderNum + ': ' + crustType + ' pizza topped with ' + topping);
}

function getSumTotal(itemCount) {
	itemCount = itemCount * 7.5;
	return "The sum total of your order is £" + itemCount.toFixed(2)
}

console.log(takeOrder('Thin crust', 'extra cheese'))
console.log(takeOrder('Deep dish', 'meatballs'))
console.log(takeOrder('Thin crust', 'goats cheese'))

console.log(getSumTotal(orderCount))