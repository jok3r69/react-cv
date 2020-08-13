import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './reset.css';
import './App.css';
import MyHeader from './Components/MyHeader';
import Home from './Pages/home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import MyFooter from './Components/MyFooter'
import LandingPage from './Pages/LandingPage';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <body>
    <Router>
    <MyHeader></MyHeader>
    <Switch>
      <Route path="/" exact component={LandingPage}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/AboutMe" exact component={AboutMe}></Route>
      <Route path="/Portfolio" exact component={Portfolio}></Route>
      <Route path="/Contact" exact component={Contact}></Route>
    </Switch>
    <MyFooter></MyFooter>
    </Router>
    </body>
    </div>
  );

}

export default App;
