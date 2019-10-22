import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 100vh;
  color: #222;

  .logo {
    height: 20vmin;
  }

  a {
    color: #09d3ac;
  }

  button {
    border-color: #09d3ac;
    background: #fff;
    color: #09d3ac;
    font-size: 1rem;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    cursor: pointer;

    &:active {
      color: #000;
    }
  }
`;

export default Wrapper;