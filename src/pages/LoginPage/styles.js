import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
`; 

export const Options = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right:0;
  bottom: 100px;
  text-align: center;
  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.div`
  width: 100%;
  color: #fff;
  font-size: 3.5vw;
`;
export const OptionsList = styled.ul`
  display: flex;
  justify-content: space-around;

  margin: 2em 0;
`;

export const OptionsItem = styled(Link)`
  margin: 0 2vw 0 0;

  height: 10vw;
  width: 10vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  vertical-align: top;
  text-decoration: none;
  cursor: pointer;

  .TMDB-avatar, .GitHub-avatar, .guest-avatar, .kids-avatar {
    background-image: url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
  }

  .effect {
    width: 100%;
    height: 100%;
  }

  :hover .effect {
    border: 3px solid #fff;
  }

  :hover .avatar-title {
    color: #fff;
  }

  .avatar-title { 
    line-height: 1.2em;
    min-height: 1.8em;
    color: grey;
    display: block;
    text-align: center;
    font-size: 1.3vw;
    margin: .6em 0;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  
`;