import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    z-index: 999;
    top:0;
    left:0;
    right:0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    transition: all ease .5s;
    background: ${props => props.background};  
`;

export const Logo = styled.div`
    height: 25px;
    
    img {
        height:100%;
    }
`;
export const User = styled.div`
    height: 35px; 

    img {
        height: 100%;
        border-radius: 3px;
    }
`;