import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import IndexPage from './layouts/index';
import AboutPage from './layouts/about';
import ProjectsPage from './layouts/projects';
import ContactPage from './layouts/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={IndexPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
      </div>
    </Router>
  );
}

export default App;
