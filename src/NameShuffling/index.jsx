import React, { memo } from 'react';

function WrappedComponent (props) {
  console.log('Re-rendering');

  return (
    <h2>Selected Name: {props.name}</h2>
  );
}

export const NameShuffling = memo(WrappedComponent);

export default NameShuffling;