import { db,storage } from "./firebase";
import {
    collection,
    getDocs,
    query,
    doc,
    deleteDoc,
    setDoc,
    where,
    limit
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

 /**
 * Fetches documents from the 'categories' collection in Firestore.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of category objects.
 * @param {string} coll
 */
 export async function fetchDocuments(coll) {
    const collectionRef = collection(db, coll);
    const q = query(collectionRef);

    try {
        const snapshot = await getDocs(q);
        const categories = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return categories;
    } catch (error) {
        console.error('Error fetching documents:', error);
        return []; // Return an empty array in case of error
    }
}
 /**
 * Fetches documents from the 'categories' collection in Firestore.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of category objects.
 * @param {string} coll
 * @param {string} whereParam - value to look for
 * @param {string} lookFor - inside documents
 * @param {number} number - limit how many to get
 */
export async function fetchDocumentsWhere(coll, whereParam,lookFor,number) {
    const collectionRef = collection(db, coll);
    const q = query(collectionRef, where(whereParam, '==', lookFor),limit(number));
    try {
        const snapshot = await getDocs(q);
        const returnVal = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return returnVal
    } catch (error) {
        console.error('Error fetching documents:', error);
    }
    return [];
}
	/**
	 * @param {string | number} id
     * @param {string | number} coll
	 */
export async function deleteStuff(coll,id) {
		if (confirm('Delete this?') == true) {
			// @ts-ignore
			await deleteDoc(doc(db, coll, id));
			console.log('succesfully deleted');
		}
	}	
    /**
	 * @param {any} obj
     * @param {string | number} coll
     * @param {string | number} id
	 */
    export async function createSomething(coll,obj,id) {
		try {
			// @ts-ignore
			const ref = doc(db, coll, `${id}`);
			const promise = await setDoc(ref, obj);
			console.log(`succesfully set new ${coll}`);
		} catch (err) {
			console.log(err);
		}
	}
    /**
 * @param {{ target: { files: any[]; }; }} e
 */
   export async function uploadImage(e) {
		let returnVals = {img:"",preview:""}
        try {
			//uploading = true;
			const file = e.target.files[0];
			// @ts-ignore
			returnVals.preview = URL.createObjectURL(file);
			const idCrypt = window.crypto.randomUUID();
			const storageRef = ref(storage, `store/categories/${idCrypt}.jpg`);
			const result = await uploadBytes(storageRef, file);
			returnVals.img = await getDownloadURL(result.ref);
            //uploading = false;
		} catch (error) {
            console.error('An error occurred during the upload process:', error);
			// Handle the error appropriately, e.g., show an error message to the user
			//uploading = false;
		}
        return returnVals
	}