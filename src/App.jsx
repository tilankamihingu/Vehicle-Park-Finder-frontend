import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import ListParks from './pages/Parks/ListParks';
import AddPark from './pages/AddPark/AddPark';
import UpdatePark from './pages/UpdatePark/UpdatePark';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListParks} />
        <Route path="/add" component={AddPark} />
        <Route path="/update/:id" component={UpdatePark} />
     </Switch>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
