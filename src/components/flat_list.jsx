import React, {Component} from 'react';

import { flats } from '../../data/flats.js';
import Flat from './flat.jsx'


class FlatList extends Component {
  renderList  = () => {
    return (flats.map((flat, index) => <Flat name={flat.name}
    url={flat.imageUrl}
    price={flat.price}
    curr={flat.curr}
    lat={flat.lat}
    lng={flat.lng}
    index={index}
    selectFlat={this.props.changeFunction}/>));
  }

  render() {
    return (
        <div className="flat-list">
          {this.renderList()}
        </div>
      );
  }
}
export default FlatList;
