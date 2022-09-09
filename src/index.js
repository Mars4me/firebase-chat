import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({

});

const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <App />
  </Context.Provider>
);
