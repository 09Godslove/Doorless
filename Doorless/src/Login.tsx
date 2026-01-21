import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Button, Container, SubContainer, Title } from './styledComp'

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
    <Container>
        <SubContainer>
            <div>
                <Title>
                    Login
                </Title>
                <p>Welcome Back!</p>
            </div>
            {error && <div>{error}</div>}

            <Button onClick={SignInWithGoogle} disabled={authing}>
                Login with google
            </Button>

            <div onClick={()=> navigate('/signup')}>
                <p>
                    Don't have an account?
                </p>
            </div>
        </SubContainer>
    </Container>
  )
}

export default Login
