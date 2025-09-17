import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBvQdyw1uiHJuXfN5o1JFgKg__9TOhrwkI",
  authDomain: "netflix-clone-b0bf3.firebaseapp.com",
  projectId: "netflix-clone-b0bf3",
  storageBucket: "netflix-clone-b0bf3.firebasestorage.app",
  messagingSenderId: "433542998552",
  appId: "1:433542998552:web:28b8c25955ff98cb7c716d",
  measurementId: "G-MS6LN4EV88"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async(name, email, password) => {
    try{
        const response =  await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvide: "local",
            email
        })
    }catch(error){
        console.log(error);
        toast.error(error.code);
    }
}

const login = async(email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error)
        toast.error(error.code);
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signUp, logout};