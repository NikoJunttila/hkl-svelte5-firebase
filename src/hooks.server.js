// @ts-nocheck
import { adminAuth,adminDB } from '$lib/server/admin';
import { redirect } from "@sveltejs/kit";
export const handle = async ({ event, resolve }) => {
	//normal authentication stuff
/* 	if (event.url.pathname.startsWith('/login') || event.url.pathname.startsWith('/auth')) {
		const sessionCookie = event.cookies.get('__session');
		console.log(`secret auth: ${event.url.pathname}`);
		try {
			const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie);
			event.locals.userID = decodedClaims.uid;
			console.log('found user id', decodedClaims.uid);
		} catch (e) {
			event.locals.userID = null;
			return resolve(event);
		}
	} */
	//for admin authentication
	if (event.url.pathname.startsWith("/control")){
		try{
			const sessionCookie = event.cookies.get('__session');
			//console.log(sessionCookie)
			const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie);
			const userDoc = await adminDB.collection("users").doc(decodedClaims.uid).get();
			const { displayName, role } = userDoc.data();
			event.locals.userID = decodedClaims.uid;
			event.locals.userRole = role
			event.locals.username = displayName
			console.log(role)
			if(event.locals.userRole !== "admin"){
				redirect(303, "/")
			}
		} catch (e){
			console.log(e)
			redirect(303, "/")
		}
			console.log(event.url.pathname);
		  } 
	return resolve(event);
};
