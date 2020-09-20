import React, { useEffect, useState } from 'react';
import './App.css';
import './loader.css';

import { HashRouter as Router, Route } from 'react-router-dom';

import IndexPage from './layouts/index';
import AboutPage from './layouts/about';
import ProjectsPage from './layouts/projects';
import ContactPage from './layouts/contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  useEffect(() => {
    const el = document.querySelector('.loader-container');
    if (el && !isLoading) {
      el.remove();
    }
  }, [isLoading])

  if (isLoading) {
    return null;
  }

  return (
    <Router basename='/'>
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
