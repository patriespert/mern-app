import React from "react";
import {BrowserRouter as Router,Route,Link, Switch} from "react-router-dom";

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Sistema de rutas base</h1>

        <Link to="/"> Home </Link>
        <br />
        <Link to="/contact"> Contacts </Link> 
        <br />
        <Link to="/users"> Users </Link>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact"  component={Contact}/>
          <Route exact path="/users"  component={Users}/>
          <Route component={Error404}/>
        </Switch>
       


      </div>
    </Router>
    
  );
}


function Home(){
  return <h2>Estamos en el componente home</h2>;
}

function Contact(){
  return <h2>Estamos en el componente contact</h2>;
}

function Users(){
  return <h2>Estamos en el componente users</h2>;
}

function Error404(){
  return <h2>Error 404......</h2>;
}

export default App;
