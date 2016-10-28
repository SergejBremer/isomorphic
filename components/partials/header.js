import React from 'react';
import Title from './title';

class Header extends React.Component {
  render() {
    return (
      <header className="header" id="header">
        <Title title="title" />
      </header>
    )
  }
}

export default Header;
