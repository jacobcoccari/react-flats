import React, {Component} from 'react';

import { flats } from '../../data/flats.js';
import Flat from './flat.jsx'


class FlatList extends Component {
  renderList  = () => {
    return (flats.map(flat => <Flat name={flat.name}
    url={flat.imageUrl}
    price={flat.price}
    curr={flat.curr}
    lat={flat.lat}
    lng={flat.lng} />));
  }

  handleClick = (event) => {
    this.props.searchFunction(event.target.lat, event.target.lng);
  }

  render() {
    return (
        <div className="flat" onClick={this.handleClick} >
          {this.renderList()}
        </div>
      );
  }
}

export default FlatList;
