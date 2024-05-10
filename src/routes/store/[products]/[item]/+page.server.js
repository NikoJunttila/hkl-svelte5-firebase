import { fetchDocumentsWhere } from "$lib/firebaseFuncs";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const returnVal = await fetchDocumentsWhere("products","id",params.item,1)
    if (returnVal.length === 0) {
        error(404, "that product does not exist!");
      }
    return {
            item:returnVal[0]
    };
};