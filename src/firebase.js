


import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  // apiKey: "AIzaSyDLLtNpaspaFVRpT_8Ek_YYBj9ZZtO7fdA",
  // authDomain: "chat-5b3f9.firebaseapp.com",
  // projectId: "chat-5b3f9",
  // storageBucket: "chat-5b3f9.appspot.com",
  // messagingSenderId: "324794575947",
  // appId: "1:324794575947:web:1cb5ece3f7c1c896e631ce"

  // apiKey: "AIzaSyBapzIQ_0KfIoOpHyD3EYTAFzGC50WVRR0",
  // authDomain: "chat-app-50983.firebaseapp.com",
  // projectId: "chat-app-50983",
  // storageBucket: "chat-app-50983.appspot.com",
  // messagingSenderId: "642785726104",
  // appId: "1:642785726104:web:9a26508e8fa78f326f4aed"
  
  apiKey: "AIzaSyCao2Ft3fQtZKbrez98S6Jzez0R6oKE6J0",
  authDomain: "chatting-app-3a348.firebaseapp.com",
  projectId: "chatting-app-3a348",
  storageBucket: "chatting-app-3a348.appspot.com",
  messagingSenderId: "598357170191",
  appId: "1:598357170191:web:203c738aa66ef128deeb7a"
};


// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth();
 export const storage = getStorage();
 
 export const db = getFirestore();
