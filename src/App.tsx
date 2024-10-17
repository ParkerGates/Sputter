import { useState } from 'react';
import { Link, Route, Switch } from "wouter";
import Home from "./views/Home/Home";
import Desk from './views/Desk/Desk';

function App() {

  return (
    <div className='app'>
      <Switch>
          <Route path="/desk" component={Home} />
          <Route path="/" component={Desk} />
      </Switch>
    </div>
  )
}

export default App
