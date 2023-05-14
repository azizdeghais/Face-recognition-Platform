import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Ajouter from './Ajouter/Ajouter';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ajouter' element={<Ajouter/>} />
      </Routes>
    </div>
  )
}

export default App
