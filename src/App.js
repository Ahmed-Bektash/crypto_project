import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About'
import Timeline from './components/Timeline';
import Tokenomics from './components/Tokenomics';
import Markets from './components/Markets';
import FAQs from './components/FAQs';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/#About' component={About} />
          <Route path='/#Timeline' component={Timeline} />
          <Route path='/#Tokenomics' component={Tokenomics} />
          <Route path='/#Markets' component={Markets} />
          <Route path='/#FAQ' component={FAQs} />
          <Route path='*'><h1>Error page</h1></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
