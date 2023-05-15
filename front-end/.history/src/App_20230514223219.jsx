import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Ajouter from './Ajouter/Ajouter';
import Modification from './Modification/Modification'
import Navbar from './Navbar/Navbar'
function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ajouter' element={<Ajouter/>} />
        <Route path='/modifier' element={<Modification />} />
      </Routes>
    </div>
  )
}

export default App
