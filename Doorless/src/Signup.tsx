import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInAnonymously, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {Button, Container, Form, SubContainer, Title }from './styledComp'

function SignUp() {

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

    const SignInAnonymously = async() =>{
        setAuthing(true)

        signInAnonymously(auth)
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
            <Title>Sign Up</Title>
            <Form>
                {error && <div>{error}</div>}
                <Button onClick={SignInWithGoogle} disabled={authing}>
                    Sign Up with google
                </Button>
                <Button onClick={SignInAnonymously} disabled={authing}>
                    Sign Up Anonymously
                </Button>
                <div onClick={() => navigate('/login')}>
                    Already have an account? Sign in
                </div>
            </Form>
        </SubContainer>
    </Container>
    
  )
}

export default SignUp
