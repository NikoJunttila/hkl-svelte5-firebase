// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		 interface Locals {
			/** @type {string} */
			userID;
			/** @type {string} */
			userRole;
			/** @type {string} */
			username;
		 }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
