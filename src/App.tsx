import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import '@/styles/colorscheme.css'
import '@/styles/post.css'
import '@/styles/style.css'

function App() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
