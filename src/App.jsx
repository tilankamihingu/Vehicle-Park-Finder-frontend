import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import ListParks from './pages/Parks/ListParks';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={ListParks} />s
     </Switch>
    </div>
    </Router>
  );
}

export default App;
