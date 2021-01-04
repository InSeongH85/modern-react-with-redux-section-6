import React from 'react';
import ReactDOM from 'react-dom';
// https://developer.mozilla.org/ko/docs/WebAPI/Using_geolocation

class App extends React.Component {
  constructor(props) {
    super(props);
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position =>  {
        // We called setState!!
        this.setState({ lat: position.coords.latitude });

        //We did not!!
        // this.state.lat = position.coords.latitude;
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  
  componentDidMount() {
    console.log('My Component was rendered to the screen');
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