// 25. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'choclate' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'

const Cart = ["Milk", "Coffee", "Tea", "Honey"];
// let allergic=true;
if(!Cart.includes('choclate')){
    Cart.unshift('choclate');
}

console.log(Cart);

if(!Cart.includes('Sugar'))
        Cart.push('Sugar');

console.log(Cart);

let allergic = false

if(allergic)
        Cart.splice(Cart.indexOf('Honey'),1);
console.log(Cart);    

Cart.splice(Cart.indexOf('Tea'),1,'Green Tea');
console.log(Cart);