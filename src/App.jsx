import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import ListParks from './pages/Parks/ListParks';
import AddPark from './pages/AddPark/AddPark';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListParks} />
        <Route path="/add" component={AddPark} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
