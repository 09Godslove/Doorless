import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'
import SignUp from './Signup.tsx'
import AuthRoute from './authRoute.tsx'
import { BrowserRouter, Route,Router, Routes, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAJPCI4Qi6r0GO--SJ1JnrTK5LYX7scV_4",
  authDomain: "doorless-ba49c.firebaseapp.com",
  projectId: "doorless-ba49c",
  storageBucket: "doorless-ba49c.firebasestorage.app",
  messagingSenderId: "1063404272107",
  appId: "1:1063404272107:web:fda0b401ebb9d144a381ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthRoute><App /></AuthRoute>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='*' element={<Navigate to= '/'/> }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
