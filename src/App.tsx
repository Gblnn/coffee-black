import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import '@/styles/colorscheme.css'
import '@/styles/post.css'
import '@/styles/style.css'
import Login from "./pages/login"
import SignUp from "./pages/signup"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

function App() {

  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
