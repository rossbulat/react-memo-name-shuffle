import React from 'react';
import logo from './logo.svg';
import { Wrapper } from './Wrapper';
import { NameShuffling } from './NameShuffling';

export class App extends React.Component {

  names = [
    'Alice',
    'Bob',
    'Charlie',
    'Dave'
  ];

  state = {
    name: null
  }

  constructor (props) {
    super(props);
    this.state.name = this.getName();
  }

  getName = () => {
    const index = Math.floor(Math.random() * (this.names.length - 1));
    return (this.names[index]);
  }

  render () {

    return (
      <Wrapper>
        <img
          src={logo}
          className="logo"
          alt="logo"
        />
        <h1>Memoize Test with Name Shuffling</h1>
        <NameShuffling name={this.state.name} />

        <button
          onClick={() => {
            this.setState({
              name: this.getName()
            });
          }}
        >
          Shuffle
      </button>
      </Wrapper>
    );
  }
}

export default App;
