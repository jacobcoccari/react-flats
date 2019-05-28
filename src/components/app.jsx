import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';
import Marker from './marker.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: props.flats,
      lat: 48.884211,
      lng: 2.34689
    }
  }

  change = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });
  }

  search = () => {
    console.log(this.state.lat);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '1000px', width: '1000px', position: 'absolute' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBKeK3fIeRIMXgDl9b4ocyeIcBqW1oqSbs" }}
          defaultCenter={{lat: this.state.lat, lng: this.state.lng}}
          defaultZoom={12}
        >
        <Marker lat={this.state.lat} lng={this.state.lng} />
        </GoogleMapReact>
      </div>
    );
  }

  render() {
    console.log("app has rendered");
    return (

        <div>
          <div className="flat-list">
            <FlatList searchFunction={this.search} changeFunction={this.change}/>
          </div>
          <div className="map-container">
            {this.search()}
          </div>
        </div>
    );

  }
}

export default App;
