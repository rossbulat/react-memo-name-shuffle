import React from 'react';

export function Counter () {

  const [count, setCount] = React.useState(0);

  return (
    <>
      {React.useMemo(
        () => (
          <p>
            <Button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </Button>
            <Button
              onClick={() => {
                setCount(count + 1);
              }}
              padding={8}
            >
              +
          </Button>
          </p>
        ),
        [count]
      )}
      <Count count={count} />
    </>
  );
}

function Count ({ count }) {
  return (
    <h2>Count: {count}</h2>
  );
}

function Button ({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Counter;