import styled from 'styled-components';


const Move = styled.div`
    position: absolute; 

    width: 40px;
    height: 220px;
    background-color: rgba(0, 0, 0, .6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    opacity: 0;
    transition: all ease .5s;
    transform: scale(0.9);  
    cursor: pointer;

    @media (max-width:760px) {
        opacity: 1;
    }
`
export const MoveLeft = styled(Move)`
    left: 0;
    transform-origin: left;
    
`;

export const MoveRight = styled(Move)`
    right: 0;
    transform-origin: right;
`;

export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`

export const List = styled.div`
    transition: all ease .5s;
`;

export const Item = styled.div`
    display: inline-block;
    width: 150px;
    height: 220px;
    cursor: pointer;
    overflow: hidden;
    img {
        height: 100%;
        width: 100%;
        transform: scale(0.9);
        transition: all ease .2s;

        :hover {
            transform: scale(1);
        }
    }
`;

export const Container = styled.div`
    margin-bottom: 30px;

    .title {
        margin: 0px 0px 0px 30px;
    }

    :hover ${MoveRight}{
        opacity: 1;
    }
    :hover ${MoveLeft}{
        opacity 1;
    }
`;
