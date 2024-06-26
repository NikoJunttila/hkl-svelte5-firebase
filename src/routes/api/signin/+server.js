import { adminAuth } from '$lib/server/admin';
import { error, json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export async function POST({ request, cookies }) {
    const body = await request.json();
    const idToken = body.idToken
    const expiresIn = 60 * 60 * 24 * 13 * 1000; // 13 days
    const decodedIdToken = await adminAuth.verifyIdToken(idToken);
    if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
        const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
        const options = { maxAge: expiresIn, httpOnly: true, secure: true, path: '/' };

        cookies.set('__session', cookie, options);
        return json({ status: 'signedIn' });
    } else {
        error(401, 'Recent sign in required!');
    }
};

export const DELETE = async ({ cookies }) => {
    cookies.delete('__session', { path: '/' });
    return json({ status: 'signedOut' });
}