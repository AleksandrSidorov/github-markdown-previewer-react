import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'This is *awesome*!'};
  }

  handleSource (event) {
    this.setState({ value: event.target.value });
  }

  setOutput () {
    return { __html: marked(this.state.value) };
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub Markup Previewer</h1>
        <h3>Source</h3>
        <textarea
          type="text"
          defaultValue={this.state.value}
          onChange={this.handleSource.bind(this)}
        />
        <h3>Output</h3>
        <div dangerouslySetInnerHTML={this.setOutput()} />
      </div>
    );
  }
}

export default App;
