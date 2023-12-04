import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCzFZBduG5zdfDcC33gpJfAKqmSMeOj7eE',
	authDomain: 'e-commerce-fakestore.firebaseapp.com',
	projectId: 'e-commerce-fakestore',
	storageBucket: 'e-commerce-fakestore.appspot.com',
	messagingSenderId: '460346844426',
	appId: '1:460346844426:web:21bd827d6d33d3b88486f3',
	measurementId: 'G-NXN7SB4N3X',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
