import React from 'react';

class Head extends React.Component {
  render() {
    return (
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/style.css" rel="stylesheet" />
        <title>isomorphic</title>
      </head>
    )
  }
}

export default Head;
