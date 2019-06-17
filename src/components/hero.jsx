import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero_overlay">
          <div className="banner_home_page_img_container">
            <h3 className="banner_home_page_title">Todos os caminhos levam ao Sanarflix</h3>
          </div>
          <div className="banner_home_page_text">
            <h4 className="banner_home_page_description">Milhares de conteúdos de medicina que se encaixam no seu perfil.</h4>
          </div>
          <div className="banner_home_page_action-buttons">
            <a href="https://www.sanarflix.com.br/assine/?_ga=2.55052908.656434469.1560692542-978020532.1560692542" className="banner_home_page_btn_assign">
              <span>Acesse agora</span>
            </a>
            <a className="banner_home_page_btn_view">Conheça nossos cursos</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
