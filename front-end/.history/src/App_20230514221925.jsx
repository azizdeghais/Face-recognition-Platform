import './App.css'
import { Link, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
function App() {

  return (
    <div>
        <Route path='/'><Home></Home> </Route>
    </div>
  )
}

export default App
