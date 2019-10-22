import React, { memo } from 'react';

function WrappedComponent (props) {
  console.log('Re-rendering');
  return (
    <>
      <h2>Selected Name: {props.name ? props.name : 'None'}</h2>
      <button
        onClick={() => { props.clearName() }}>Clear
      </button>
    </>
  );
}

export const NameShuffling = memo(WrappedComponent);

export default NameShuffling;