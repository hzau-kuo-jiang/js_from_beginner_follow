shoppingList = ['Milk', "Bread", 'Apples']
shoppingList.splice(shoppingList.indexOf('Bread'), 1, 'Bananas', 'Eggs')
console.log(shoppingList);
console.log(shoppingList.pop());
shoppingList.sort();
console.log(shoppingList);
console.log(shoppingList.indexOf('Milk'));
shoppingList.splice(1 + shoppingList.indexOf('Bananas'), 0, 'Carrots', 'Lettuce');
console.log(shoppingList);
newList = ['Juice', 'Pop']
shoppingList = shoppingList.concat(newList).concat(newList)
console.log(shoppingList.lastIndexOf('Pop'));
console.log(shoppingList);