// @ts-nocheck
import { fetchDocuments } from "$lib/firebaseFuncs";
/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const data = await fetchDocuments("products")
    const filtered = data.filter((item) => item.title.toLowerCase().includes(params.query.toLowerCase()));
    return {
        props:{
            items:filtered
        }
    };
};