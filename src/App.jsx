import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Home, CreatePost, Login } from './pages'



function App() {

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>Create Post</ Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
