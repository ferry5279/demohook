import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Hook,Login,Self,Home,Reg } from './assembly';
const routes = [
  
  {
    path: "/self",
    component: Self,
  }, 
  {
    path: "/hook",
    component: Hook,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/reg",
    component: Reg,
  },
  {
    path: "/",
    component: Home,
},
  
];
export default class index extends React.Component {
  render() {
    return(
      <BrowserRouter>
      {renderRoutes(routes)}
      </BrowserRouter>
    )
  }

}