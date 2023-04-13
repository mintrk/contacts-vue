import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDKKxZYbEen-lFxq2ZrXb8urdHxIZDGhmQ",
    authDomain: "egco427-382606.firebaseapp.com",
    projectId: "egco427-382606",
    storageBucket: "egco427-382606.appspot.com",
    messagingSenderId: "91593605242",
    appId: "1:91593605242:web:4ebbfe83512cefd0357bc3",
    measurementId: "G-3P07RFPM07"
  };

initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)

app.mount('#app')
