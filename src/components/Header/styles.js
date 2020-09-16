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
    background-image: linear-gradient(rgb(0, 0, 0), ${props => props.background});  
    transition: all ease .5s;
`;

export const PrimaryNavegation = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    height: 32px;
    margin-right: 25px;
    
    img {
        height:100%;
    }
`;

export const Nav = styled.div`
    display: flex;

`;
export const List = styled.ul`
    display: flex;
    cursor: pointer;
`;

export const NavItem = styled.li`
    padding: 0px 10px;

    a {
        font-size: 1.4rem;
    }

    .active {
        font-weight: 700;
    }
`;
export const SecondaryNavegation = styled.div`
    display: flex;
    align-items: center;

    .kids {
        font-size: 1.5em;
        margin-right: 20px;
    }

    .notification, .gift, .search {
        font-size: 2.7em;
        margin-right: 20px;
    }
    
    .notification {

    }
    .gift {

    }
    .search {

    }

`;

export const User = styled.div`
    height: 30px; 
    margin-right: 20px;
    display: flex;
    align-items: center;

    img {
        height: 100%;
        border-radius: 3px;
        
    }

    .arrow-down {
        font-size: 23px;
        margin-left: 5px;
        color: #fff;
    }
`;