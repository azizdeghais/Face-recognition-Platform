import './App.css'
import { Link, Route, Router } from "react-router-dom";
import Home from './Home/Home';
import Ajouter from './Ajouter/Ajouter';

function App() {

  return (
    <div>
      <Router>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ajouter' element={<Ajouter/>}></Route>
      </Router>
    </div>
  )
}

export default App
