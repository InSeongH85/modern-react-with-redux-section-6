import React from 'react';
import ReactDOM from 'react-dom';
// https://developer.mozilla.org/ko/docs/WebAPI/Using_geolocation

class App extends React.Component {
  
  state = { lat: null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>  this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My Component was jus updated - it rerendered');
  }
  
  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>
    } 
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div> 
    }
    return <div>Loading...</div>
  }
}

ReactDOM.render(<App />,  document.querySelector('#root'))