import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: props.flats

    }
  }

  search = (lat, lng) => {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '1000px', width: '1000px', position: 'absolute' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{lat: 59.95, lng: 30.33}}
          defaultZoom={12}
        >
        </GoogleMapReact>
      </div>
    );
  }

  render() {
    return (

        <div>
          <div className="flat-list">
            <FlatList flats={this.flats} />
          </div>
          <div className="map-container">
            {this.search(10, 10)}
          </div>
        </div>
    );

  }
}

export default App;
