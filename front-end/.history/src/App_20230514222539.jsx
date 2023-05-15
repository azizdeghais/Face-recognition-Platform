import './App.css'
import { Link, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import Ajouter from './Ajouter/Ajouter';

function App() {

  return (
    <div>
      <Switch>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ajouter' element={<Ajouter/>}></Route>
      </Switch>
    </div>
  )
}

export default App
