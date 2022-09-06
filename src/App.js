import './App.css';
import React, { Component } from "react";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/updateEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route path = "/" exact component={ListEmployeeComponent}> 
              </Route>
              <Route path = "/employees" component={ListEmployeeComponent}> 
              </Route>
              <Route path = "/add-employee/:id" component={AddEmployeeComponent}>
              </Route>
              <Route path = "/view-employee/:id" component={ViewEmployeeComponent}>
              </Route>
              <Route path = "/update-employee/:id" component={UpdateEmployeeComponent}>
              </Route>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
