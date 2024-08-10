import { fetchDocuments } from '$lib/firebaseFuncs';
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const returnval = await fetchDocuments("cards3")
    let currentIndex = returnval.length;
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [returnval[currentIndex],returnval[randomIndex]] = [
      returnval[randomIndex],
      returnval[currentIndex],
    ];
  }
    return {
        cards: returnval
    };
};
