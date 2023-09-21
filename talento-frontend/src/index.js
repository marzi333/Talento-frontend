import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug

const firebaseConfig = {
  apiKey: "AIzaSyA2DT0wULXH8FZQwVkcJZg5reMdwcN4SY8",
  authDomain: "greenhat23mun-8051.firebaseapp.com",
  projectId: "greenhat23mun-8051",
  storageBucket: "greenhat23mun-8051.appspot.com",
  messagingSenderId: "1085215061707",
  appId: "1:1085215061707:web:6985f29d33769354820d4e",
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
