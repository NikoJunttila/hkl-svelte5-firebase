import { fetchDocuments } from '$lib/firebaseFuncs';
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const returnval = await fetchDocuments("categories")
    return {
        categories: returnval
    };
};