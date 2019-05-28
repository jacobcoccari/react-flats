import React, {Component} from 'react';

// import Flat from './flat.jsx';

class Flat extends Component {
  handleClick = (event) => {
    console.log("handle click called");
    this.props.selectFlat(this.props.lat, this.props.lng);
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick.bind(this)} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.url}')` }} >
        <div className="card-category">{this.props.price}</div>
        <div class="card-description">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
