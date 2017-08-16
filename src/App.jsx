import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    console.log(this.props.appState.value, this.props.appState.validText)
    return (
      <div>
        <input
          type="text"
          value={this.props.appState.value}
          onChange={this.props.appState.onChange.bind(this.props.appState)}
        />
        <div>
          {this.props.appState.validText}
        </div>
        <DevTools />
      </div>
    );
  }
}

export default App;
