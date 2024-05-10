import { fetchDocuments } from '$lib/firebaseFuncs';
/** @type {import('./$types').LayoutLoad} */
export async function load() {
    const full = await fetchDocuments("storetext")
    return {
        // @ts-ignore
        text:full[0].text
    };
}