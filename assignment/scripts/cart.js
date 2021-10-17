console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

//addItem code before stretch goal:
// function addItem(item){
//   basket.push(item)
//   return true;
// }
function addItem(item){
  if ( isFull() === false ) {
    basket.push(item)
    return true;
  } else {
    return false;
  }
}
//testing code
console.log('basket: ', basket);
console.log('adding broccoli to basket (expect true): ', addItem('broccoli'));
console.log('basket: ', basket);

function listItems(){
  for ( let i = 0; i < basket.length; i++ ){
    console.log (basket[i]);
  }
}
//testing code
console.log('In your shopping cart:');
console.log(listItems());
//not sure why I'm getting an undefined here :(

function empty(){
  return basket = [];
}
//testing code
console.log('removing items (expect empty array): ', empty());

function isFull(){
  if ( basket.length < maxItems ) {
    return false;
  } else {
    return true;
  }
}
//testing code
console.log('number of items in basket: ', basket.length);
console.log ('Checking if basket is full (expect false): ', isFull());

console.log('adding broccoli to basket (expect true): ', addItem('broccoli'));
console.log('adding tofu to basket (expext true): ', addItem('tofu'));
console.log('adding eggs to basket (expect true): ', addItem('eggs'));
console.log('adding yogurt to basket (expext true): ', addItem('yogurt'));
console.log('adding bread to basket (expect true): ', addItem('bread'));

console.log('number of items in basket: ', basket.length);
console.log ('Checking if basket if full (expect true): ', isFull());

console.log('testing addItem when isFull === true')
console.log('adding apple to basket (expect false): ', addItem('false'));
console.log('listing items (should not include apple): ')
console.log(listItems());
