import React, { Component } from 'react';
import axios from 'axios';

import Header from './header.jsx';
import Hero from './hero.jsx';

class App extends Component {
  // state = {
  //   courses: [],
  // }

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      imageURL: '',
    }
  }

  componentDidMount() {
    axios.get(`https://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos`)
      .then(res => {
        const courses = res.data;
        this.setState({ courses, imageURL: courses.imagem });
      })
  }

  render() {
    const { imageURL } = this.state;
    return (
      <div>
        <Header />
        <Hero />
        <div className="container">
          <ul>
          { this.state.courses.map(course =>
            <li key={course.id}>
              {course.nome}
              <img src={ course.imagem } />
            </li>
            )};
          </ul>
        </div>
      </div>

    );
  }
}

export default App;
