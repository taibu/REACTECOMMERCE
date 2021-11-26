import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import ErrorBoundary from './ErrorBoundary';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>     
      <Router>
        <ErrorBoundary>
           <Header/>        
        </ErrorBoundary>
      </Router>
    </React.Fragment>
  );
}

export default App;
