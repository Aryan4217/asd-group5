import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from  "./pages/Home"
import Login from  "./pages/Login"
import Register from  "./pages/Register"
import Layout from  "./pages/Layout"
import OrderCustomisation from './components/OrderCustomisation';


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Layout/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
          <Route path="Home" element={<Home/>}/>
          <Route path="Customisation" element={<OrderCustomisation/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
