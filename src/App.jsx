import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Home, CreatePost, Login } from './pages'
import { useState } from "react"
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";


function App() {
  const [isAuth, setIsAuth] = useState(false);



  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
     window.location.pathname = '/login'
    })
  }

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>Create Post</ Link>
       {!isAuth ? <Link to='/login'>Login</Link> : <button onClick={signUserOut}>Sign Out</button> }
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  )
}

export default App
