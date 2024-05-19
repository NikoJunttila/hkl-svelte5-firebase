<script>
// @ts-nocheck

	import { auth, user, userData } from '$lib/firebase';

	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
	import { db } from '$lib/firebase';
	import { doc, getDoc } from 'firebase/firestore';
	import { createSomething } from '$lib/firebaseFuncs';
	import { goto } from '$app/navigation';
	import { notifications } from '$lib/stores/notifications.svelte';
	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		const credential = await signInWithPopup(auth, provider);
		const idToken = await credential.user.getIdToken();
		const res = await fetch('/api/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
			},
			body: JSON.stringify({ idToken: idToken })
		});
		const ref = doc(db, 'users', credential.user.uid);
		const exists = await getDoc(ref).then((doc) => doc.exists());
		if (!exists) {
			try {
				console.warn('trying to write stuff');
				/** @type {import("$lib/customTypes").UserInfo}*/
				// @ts-ignore
				const userData = credential.user;
				if (!userData.phoneNumber) {
					userData.phoneNumber = '';
				}
				const userObj = {
					email: userData.email.toLowerCase(),
					photo: userData.photoURL,
					displayName: userData.displayName,
					phoneNumber: userData.phoneNumber,
					uid: userData.uid,
					role: 'normal'
				};
				const promise = await createSomething('users', userObj, credential.user.uid);
			} catch (e) {
				console.error(e);
			}
			notifications.success("Kirjauduttu sisään",4000)
			goto("/")
		}
	}
	async function signOutSSR() {
		const res = await fetch('/api/signin', { method: 'DELETE' });
		await signOut(auth);
	}
	$effect(() => {
		console.log($userData)
	})
</script>
<div class="pt-2 flex flex-col justify-center items-center">
	{#if $user}
	<h2 class="card-title">Tervetuloa, {$user.displayName}</h2>
	{#if $userData.role === "admin"}
	<a class="text-center btn my-3" href="/control">Siirry hallintapaneeliin</a>
	{/if}
	<button class="btn btn-warning" onclick={signOutSSR}>Sign out</button>
	{:else}
	Hallintapaneeliin kirjautuminen. Myöhemmin käyttäjälle mahdollisuus tallentaa osto tapahtumat
	<button class="btn btn-primary" onclick={signInWithGoogle}>Sign in with Google</button>
	{/if}
</div>
