import React from 'react';
import Header from '../partials/header';
import Main from '../partials/main';
import Footer from '../partials/footer';

class Index extends React.Component {
  render() {
    return (
      <div className="container" id="container">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Index;
