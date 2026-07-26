import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";



const saveUserProfile = async (user) => {

  const userRef = doc(
    db,
    "users",
    user.uid
  );


  const userSnap = await getDoc(userRef);


  if (!userSnap.exists()) {

    await setDoc(
      userRef,
      {

        name:
          user.displayName || "MicroWebs User",

        email:
          user.email || "",

        photo:
          user.photoURL || "",


        country: "Nigeria",

        state: "",

        city: "",


        createdAt:
          serverTimestamp()

      }
    );

  }

};





export const googleLogin = async () => {

  const provider =
    new GoogleAuthProvider();


  const result =
    await signInWithPopup(
      auth,
      provider
    );


  await saveUserProfile(
    result.user
  );


  return result.user;

};





export const appleLogin = async () => {


  const provider =
    new OAuthProvider(
      "apple.com"
    );


  const result =
    await signInWithPopup(
      auth,
      provider
    );


  await saveUserProfile(
    result.user
  );


  return result.user;

};