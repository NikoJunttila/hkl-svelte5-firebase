/**
 * @typedef {Object} Subcategory
 * @property {number} id - The unique identifier for the subcategory.
 * @property {string} name - The name of the subcategory.
 */

/**
 * @typedef {Object} Category
 * @property {number} id - The unique identifier for the category.
 * @property {string} name - The name of the category.
 * @property {string} thumbnail - The thumbnail of the category.
 * @property {boolean} sale - If there is sale.
 * @property {Subcategory[]} subcategories - An array of subcategories belonging to this category.
 */

/**
 * @typedef {Object} CategoriesData
 * @property {Category[]} categories - An array of categories.
 */
/**
 * @typedef {Object} Product
 * @property {number} id - The unique identifier of the product.
 * @property {string} title - The title of the product.
 * @property {string} description - The description of the product.
 * @property {number} price - The price of the product.
 * @property {number} discountPercentage - The discount percentage applied to the product.
 * @property {number} discountedPrice - The products price after discount.
 * @property {number} rating - The rating of the product.
 * @property {number} stock - The available stock of the product.
 * @property {string} brand - The brand of the product.
 * @property {string} category - The category of the product.
 * @property {number} categoryID - The categoryID of the product.
 * @property {string} thumbnail - The URL of the thumbnail image of the product.
 * @property {string} link - The URL to some link.
 * @property {string} linkType - The type of that link.
 * @property {string[]} images - An array containing URLs of images of the product.
 */

/**
 * @typedef {Object} ProductList
 * @property {Product[]} products - An array containing the list of products.
 * @property {number} total - The total number of products available.
 * @property {number} skip - The number of products skipped in the current query.
 * @property {number} limit - The maximum number of products returned in the current query.
 */
/**
 * Represents a coupon with its name, type, and amount.
 * @typedef {Object} Coupon
 * @property {string} name - The name of the coupon.
 * @property {string} type - The type of the coupon, e.g., 'percentage' or 'fixed'.
 * @property {number} amount - The amount of the coupon, either a percentage or a fixed value.
 * @property {string} category - category to be applied to.
 * @property {string} categoryID - categoryID to be applied to.
 * @property {string} id - id.
 * @property {boolean} discount - works on discounted?.
 * @property {number} minTotal - what total should atleast be to work.
 */
/**
 * @typedef {Object} UserInfo
 * @property {string} uid - The unique identifier of the user.
 * @property {string} displayName - The display name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} phoneNumber - The phone number of the user.
 * @property {string} photoURL - The URL of the user's photo.
 */
// @ts-ignore
export { CategoriesData };