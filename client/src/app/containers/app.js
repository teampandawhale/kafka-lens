import React from 'react';

import Main from './Main';
import Navigation from '../components/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // bind methods here
  }
  // Lifecycle methods
  componentDidMount() {
    //code here
  }
  // Methods
  exampleMethod(event) {
    //code here
  }
  render() {
    return (
        <div>
            <Navigation />
            <Main />
        </div>
    );
  }
}

export default App;
