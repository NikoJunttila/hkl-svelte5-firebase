import { setAdminRole } from "$lib/server/admin";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    
    return {};
};

export const actions = {
    default: async ({ request}) => {
    
      const data = await request.formData();
      const uid = data.get('uid');
      setAdminRole(uid)
    },
  }