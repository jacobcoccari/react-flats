import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: props.flats,
      lat: 48.884211,
      lng: 2.34689
    }
  }

  search = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });

    console.log(lat);

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '1000px', width: '1000px', position: 'absolute' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBKeK3fIeRIMXgDl9b4ocyeIcBqW1oqSbs" }}
          defaultCenter={{lat: lat, lng: lng}}
          defaultZoom={12}
        >
        </GoogleMapReact>
      </div>
    );
  }

  render() {
    console.log("penis");
    return (

        <div>
          <div className="flat-list">
            <FlatList flats={this.flats} searchFunction={this.search}/>
          </div>
          <div className="map-container">
            {this.search(this.state.lat,this.state.lng)}
          </div>
        </div>
    );

  }
}

export default App;
