import React from 'react';
import logo from './logo.svg';
import { Wrapper } from './Wrapper';

function AppFunctional () {

  const names = [
    'Alice',
    'Bob',
    'Charlie'
  ];

  const [name, setName] = React.useState(names[0]);

  const getName = () => {
    const index = Math.floor(Math.random() * (names.length));
    return names[index];
  }

  const clearName = () => {
    setName(null);
  }

  return (
    <Wrapper>
      <img
        src={logo}
        className="logo"
        alt="logo"
      />
      <h1>Memoize Test with Name Shuffling</h1>

      {React.useMemo(
        () => {
          console.log('Re-rendering');
          return (
            <>
              <h2>Selected Name: {name ? name : 'None'}</h2>
              <button
                onClick={() => { clearName() }}>Clear
            </button>
            </>
          );
        },
        [name]
      )}

      <button
        onClick={() => {
          setName(getName());
        }}
      >
        Shuffle
      </button>
    </Wrapper>
  );
}

export default AppFunctional;
