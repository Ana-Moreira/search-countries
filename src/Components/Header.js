import React from 'react';

import logo from '../imagem/logo.jpg';
import Button from './Button';

import '../../Styles/Header.css';

function Header() {
  return (
    <header>
      <img className="mundo-logo" src={ logo } alt="MUNDO logo" />
      <Button />
    </header>
  );
}

export default Header;