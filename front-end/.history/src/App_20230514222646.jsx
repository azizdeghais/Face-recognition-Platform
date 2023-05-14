import './App.css'
import { Route, Router } from "react-router-dom";
import Home from './Home/Home';
import Ajouter from './Ajouter/Ajouter';

function App() {

  return (
    
      <Router>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ajouter' element={<Ajouter/>}></Route>
      </Router>
    
  )
}

export default App
