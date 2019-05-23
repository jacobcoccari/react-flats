import React, {Component} from 'react';

import FlatList from './flat_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: props.flats

    }
  }

  render() {
    return (

        <div>
          <div className="flats">
            <FlatList flats={this.flats} />
          </div>
        </div>
    );

  }
}

export default App;
