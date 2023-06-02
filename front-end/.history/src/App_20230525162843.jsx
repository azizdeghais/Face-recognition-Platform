import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Ajouter from './Ajouter/Ajouter';
import Navbar from './Navbar/Navbar';
import Liste from './Liste/Liste';
import Modifier from './Modifier/Modifier';
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ajouter' element={<Ajouter/>} />
        <Route path='/modifier' element={<Modification />} />
        <Route path='/liste' element={<Liste />} />
        <Route path='/:id' element={<Modifier />} />
      </Routes>
    </div>
  )
}

export default App
