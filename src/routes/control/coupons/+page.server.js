import { fetchDocuments } from '$lib/firebaseFuncs';
export async function load() {
    const returnval = await fetchDocuments("categories")
    return {
        categories: returnval
    };
};