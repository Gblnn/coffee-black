import { BrowserRouter, Route, Routes } from "react-router-dom"
import Redirect from "./components/redirect"


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Redirect/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
