import {notifications} from "./notifications.svelte.js"
import { browser } from '$app/environment';

/**
 * @param {number} num
 */
function naiveRound(num) {
    var p = Math.pow(10, 2);
	const returning = Math.round(num * p) / p;
	return returning
}
function loadFromLocalStorage(){
	if (!browser) return []
	let productsJson = localStorage.getItem('products');
	if (productsJson) {
		return JSON.parse(productsJson)
	}  else {
		return []; // Default to an empty array if no products are found
	} 
  };
  
export function createProductStore() {
	/** @type {import("$lib/customTypes").Product[]}*/
	let products = $state(loadFromLocalStorage())
	let total = $derived(products.reduce((acc, product) => {return acc + product.discountedPrice;}, 0));

	function add(/** @type {import("$lib/customTypes").Product} */ p, /** @type {number} */ amount){
		for (let i=0;i<amount;i++){
			if(p.discountPercentage){
				p.discountedPrice = naiveRound(p.price * ((100 - p.discountPercentage)/100))
			} else {
				p.discountedPrice = p.price
			}
			notifications.success("Uusi tuote lisätty",3000)
			products.push(p)
			localStorage.setItem('products', JSON.stringify(products));
		}
	}
	/**
	 * @param {number} index
	 */
	function removeItem(index){
		products.splice(index,1)
		localStorage.setItem('products', JSON.stringify(products));
	}
	return {
		get products() { return products },
		get total() { return total },
		remove: (/** @type {number} */ index) => removeItem(index),
		newProduct: (/** @type {import("$lib/customTypes").Product} */ p, /** @type {number} */amount) => add(p,amount),
   };
}
export const productsStore = createProductStore()