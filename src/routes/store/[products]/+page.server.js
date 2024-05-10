import { fetchDocumentsWhere } from '$lib/firebaseFuncs';
/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const returnVal = await fetchDocumentsWhere("products",'categoryID',params.products,100)

    return {
        props:{
            products: returnVal,
        }
    };
};