import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./config/routes";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.scss';

function App() {
  return (
   <Router>
     <Switch>
        {routes.map((route,index) => (
          <RouteWithSubRoutes key={index} {...route}/>
        ))}
     </Switch>
   </Router>
    
  );
}

function RouteWithSubRoutes(route){
  console.log(route);
  return (
    <Route
    path={route.path}  
    exact={route.exact}
    render={props => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
