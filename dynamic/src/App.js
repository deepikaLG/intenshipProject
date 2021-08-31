import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/pages/Home';
import Services from './Component/pages/Services';
import Products from './Component/pages/Products';
import SignUp from './Component/pages/SignUp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import NewUser from './Component/pages/NewUser';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Services' component={Services} /> 
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
     </Router>
   </>
  );
}

export default App;
