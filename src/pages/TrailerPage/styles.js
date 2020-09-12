import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .trailer {
    width: 100%;
    height: 100%;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  margin: 2em;

  .icon {
    width: 50px;
    height: 50px;
    padding: 10px;

    z-index: 99999;
    font-size: 30px;
    color: #fff;
    transition: all ease .2s;
    cursor: pointer;
    background-color: rgba(0,0,0,.6);
    border-radius: 50%;

    :hover {
      font-size: 50px;
      width: 70px;
      height: 70px;
      color: white;

    }
  }
`
