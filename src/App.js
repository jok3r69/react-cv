import React, {useState }  from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './reset.css';
import './App.css';
import MyHeader from './Components/Header';
import StoryTime from './Pages/StoryTime';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import MyFooter from './Components/Footer'
import LandingPage from './Pages/LandingPage';
import Portfolio from './Pages/Portfolio';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <div className="App">
      
    <Router>
    <MyHeader
      mode={darkMode}
      switchMode={() => setDarkMode(!darkMode)}
    />
    <Switch>
      <Route path="/" exact component={LandingPage}></Route>
      <Route path="/home" exact component={StoryTime}></Route>
      <Route path="/AboutMe" exact component={AboutMe}></Route>
      <Route path="/Portfolio" exact component={Portfolio}></Route>
      <Route path="/Contact" exact component={Contact}></Route>
    </Switch>
    {/* <body className={darkMode ? "body.dark-theme" : "body.light-theme"}>Im here boooy</body> */}
    <MyFooter></MyFooter>
    </Router>
    
    </div>
  );

}

export default App;
