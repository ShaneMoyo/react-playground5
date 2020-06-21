import React from 'react';
import './App.css';
import Increment from './components/Increment'; 
import Gists from './components/gists/Gists'; 
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link 
 } from 'react-router-dom'

function App() {
  const Home = () => <section><h1>Welcome to Home</h1><div>Have a look around</div></section>
  return (
    <div className="App">
      <Router>
        <nav>
          <ul> 
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/increment">Increment</Link>
            </li>
            <li>
              <Link to="/gists">Gists</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/increment" component={Increment}/>
          <Route path="/gists" component={Gists}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
