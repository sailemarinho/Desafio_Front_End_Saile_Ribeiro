import React, { Component } from 'react';
import axios from 'axios';

import Header from './header.jsx';
import Hero from './hero.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <div className="container"></div>
      </div>

    );
  }
}

export default App;
