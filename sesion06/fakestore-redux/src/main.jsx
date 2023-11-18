import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCzFZBduG5zdfDcC33gpJfAKqmSMeOj7eE',
	authDomain: 'e-commerce-fakestore.firebaseapp.com',
	projectId: 'e-commerce-fakestore',
	storageBucket: 'e-commerce-fakestore.appspot.com',
	messagingSenderId: '460346844426',
	appId: '1:460346844426:web:21bd827d6d33d3b88486f3',
	measurementId: 'G-NXN7SB4N3X',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
