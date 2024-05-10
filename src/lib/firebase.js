// @ts-nocheck
import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsfQIb3dA-_6bvuVzW4pt4IHlpqMjtlsA",
  authDomain: "hyvinvointikeskusluxus1.firebaseapp.com",
  projectId: "hyvinvointikeskusluxus1",
  storageBucket: "hyvinvointikeskusluxus1.appspot.com",
  messagingSenderId: "835533744494",
  appId: "1:835533744494:web:91045d1b360a7e1c61797f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();


// @ts-ignore
function userStore() {
  let unsubscribe;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable(null);
    return {
      subscribe: subscribe,
    };
  }

  const { subscribe } = writable(auth.currentUser || null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe: subscribe,
  };
}

export const user = userStore();

export function docStore(path) {
  let unsubscribe;

  const docRef = doc(db, path);

  const { subscribe } = writable(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data()) ?? null);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}
export const userData = writable("");
user.subscribe((user) => {
  if (user) {
    const docRef = doc(db, `users/${user.uid}`);
    onSnapshot(docRef, (snapshot) => {
      userData.set(snapshot.data());
    });
  } 
});