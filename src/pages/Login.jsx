/* eslint-disable react/prop-types */
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';

function Login({ setIsAuth }) {

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true)
    })
  }

  return (
    <div className='loginPage'>
      <p>Sign in with Google</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login