import React, {Component} from 'react';

// import Flat from './flat.jsx';

class Flat extends Component {
  render() {
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.url}')` }}>
        <div className="card-category">{this.props.price}</div>
        <div class="card-description">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
