import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInAnonymously, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login() {
    const auth = getAuth()
    const navigate = useNavigate()

    const [authing, setAuthing] = useState(false)
    const [error, setError] = useState('')

    const SignInWithGoogle = async() =>{
        setAuthing(true)

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response =>{
                console.log(response.user.uid)
                navigate('/')
            } )
            .catch(error =>{
                console.log(error)
                setAuthing(false)
            })
    }
  return (
    <>
        <div>
            <div>
                <div>
                    <h3>
                        Login
                    </h3>
                    <p>Welcome Back! Please Enter Your Details</p>
                </div>
            </div>
        </div>
        {error && <div>{error}</div>}

        <button onClick={SignInWithGoogle} disabled={authing}>
            login with google
        </button>

        <div onClick={()=> navigate('/signup')}>
            <p>
                Don't have an account?
            </p>
        </div>
    </>
  )
}

export default Login
