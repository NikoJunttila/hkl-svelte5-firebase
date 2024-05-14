import { fetchDocumentsWhere } from '$lib/firebaseFuncs';
import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const returnVal = await fetchDocumentsWhere("products",'categoryID',params.products,100)
    if (returnVal.length<1){
        error(404,"ei tuotteita")
    }
    return {
        props:{
            products: returnVal,
        }
    };
};