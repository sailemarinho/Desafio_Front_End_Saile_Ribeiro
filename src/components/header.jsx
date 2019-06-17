import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="header">
          <div className="header_container">
            <div style={{ display:'flex'}}>
              <div className="header_logo">
                <a href="/">
                  <img src="https://cdn-themes.thinkific.com/34977/185711/OJC7CQxTP2z6m2xnybKb_sanarflix-logo-new.png" alt="header_logo_img"/>
                </a>
              </div>
              <div className="header_navigation_buttons">
                <ul className="header_nav-list">
                  <li className="header_nav-list__item header_text-hollow header_active">
                    <a href="/">Inicio</a>
                  </li>
                  <li className="header_nav-list__item header_text-hollow">
                    <a href="http://flix.e-sanar.com.br/pages/sobre">Sobre o Sanarflix</a>
                  </li>
                  <li className="header_nav-list__item header_text-hollow">
                    <a href="http://flix.e-sanar.com.br/pages/faq">Perguntas frequentes</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="header_user_info">
              <div className="header_sign_join"></div>
              <a href="/" className="btn_sign header_sign_in_button">
                <span className="header_text-hollow">Entrar</span>
              </a>
              <a href="https://www.sanarflix.com.br/assine" className="btn_sign header_sign_up_button">
                <span className="header_text-hollow">Assine</span>
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
