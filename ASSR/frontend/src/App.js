import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowEstudiantes from './components/ShowEstudiantes';

function App() {
  return (
    <Router>
     <Navigation/>
     <Route path="/Estudiantes" exact component={ShowEstudiantes} />
     <Route path="/Profesores" render={()=>(<div>Lista de Profesores</div>)}/>
    </Router>
  );
}
export const backend = {
  host: "http://localhost",
  port: 8080
}

export default App;