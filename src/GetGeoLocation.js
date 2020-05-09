import React from 'react';
import './App.css';
import { Button } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeoCodeCoordinates = this.reverseGeoCodeCoordinates.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    this.reverseGeoCodeCoordinates();
  }

  reverseGeoCodeCoordinates() {
    fetch(
      `https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7c${this.state.latitude},${this.state.longitude}&key=AIzaSyDAH3kChZgwPPVQLtbVDi5hIpj78xMD8DE`
    )
      // .then((response) => response.json())
      .then((res) => res.text()) // convert to plain text
      .then((text) => console.log(text))
      .then((data) =>
        this.setState({
          userAddress: data.results[0].formatted_address,
        })
      )
      .catch((error) => alert(error));
  }

  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        alert('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        alert('An unknown error occurred.');
        break;
      default:
        alert('An unknown error occurred.');
    }
  }

  render() {
    return (
      <center className='App'>
        {/* <h2>React GeolocationExample</h2> */}
        <Button type='primary' onClick={this.getLocation}>
          <b>SET DELIVERY LOCATION</b>
        </Button>

        {/* <button onClick={this.getLocation}>Get Coordinates</button> */}
        <h4>HTML5 Coordinates</h4>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <h4>Google Maps Reverse Geocoding</h4>
        <p>Address: {this.state.userAddress}</p>
        {this.state.latitude && this.state.longitude ? (
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7c${this.state.latitude},${this.state.longitude}&key=AIzaSyAvKRWqZNDF3e0VOz8YPiZN77QvjcwymP0`}
            alt=''
          />
        ) : null}
      </center>
    );
  }
}

export default App;
