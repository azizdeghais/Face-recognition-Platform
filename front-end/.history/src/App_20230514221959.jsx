import './App.css'
import { Link, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import Ajouter from './Ajouter/Ajouter';

function App() {

  return (
    <div>
        <Route path='/'><Home /></Route>
        <Route path='/ajouter'><Ajouter/></Route>
    </div>
  )
}

export default App
