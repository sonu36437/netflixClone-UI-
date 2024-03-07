import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navBar"
import Home from "./pages/Home"
export default function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

   </>
  )
}