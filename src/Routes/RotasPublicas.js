import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";
import Login from '../pages/Login';

// import { Container } from './styles';

function RotasPublicas() {
  return (
      <Switch>
          <Route exact path="/" element={<Login />}/>
      </Switch>
  )
}

export default RotasPublicas;