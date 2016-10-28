import React from 'react';
import Head from './head';

class Layout extends React.Component {
  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <div className="root" id="root">
            {this.props.children}
          </div>
          <script src="/script.js"></script>
        </body>
      </html>
    )
  }
}

export default Layout;
