import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp(
  {
    apiKey: "AIzaSyCLF39nCjdHYTAbqdQbZG9NYTfLpniFVw0",
    authDomain: "chat-react-ee72f.firebaseapp.com",
    projectId: "chat-react-ee72f",
    storageBucket: "chat-react-ee72f.appspot.com",
    messagingSenderId: "236294190804",
    appId: "1:236294190804:web:6aa153b099e4f1a6d66d41",
    measurementId: "G-NYF0XGFPY1",
  },
  {
    experimentalForceLongPolling: true, // this line
    useFetchStreams: false,
  }
);

export const Context = createContext(null);

const db = getFirestore(app);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{ app, db, auth }}>
    <App />
  </Context.Provider>
);
