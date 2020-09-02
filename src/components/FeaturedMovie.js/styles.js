import styled from 'styled-components';

export const Container = styled.div`
    background-size: ${props => props.backgroundSize};
    background-position: ${props => props.backgroundPosition};
    background-image: ${props => props.backgroundImage};

    height: 100vh;

    .featured--vertical {
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
    }

    .featured--horizontal {
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 30%, transparent 70%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-bottom: 150px;
        padding-top: 70px;
    }

    @media (max-width:760px) {
        height: 90vh;
    }
`;

export const Name = styled.div`
    font-size: 60px;
    font-weight: bold;

    @media (max-width:760px) {
        font-size: 40px;
    }
`;
export const Info = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;

    @media (max-width:760px) {
        font-size: 16px;   
    }
`;


export const Rating = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
`;
export const Year = styled.div`
    display: inline-block;
    margin-right: 15px;
`;
export const Seasons = styled.div`
    display: inline-block;
    margin-right: 15px;
`;


export const Description = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    width: 40%;

    a {
        color: #FFF;
        font-size: 12px;
        transition: all ease .3s;

        :hover {
            color: #E50914;
            cursor: pointer;
        }
    }

    @media (max-width:760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }
`;
export const Buttons = styled.div`
    margin-top: 15px;

    .featured--watchbutton, .featured--mylistbutton {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 12px 25px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease .2s;

        @media (max-width:760px) {
            font-size: 16px;
        }
    }

    .featured--watchbutton:hover, .featured--mylistbutton:hover {
        opacity: .7;
    }

    .featured--watchbutton {
        background-color: #FFF;
        color: #000;
    }
    .featured--mylistbutton {
        background-color: #333;
        color: #FFF;
    }

`;
export const Genres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;

    @media (max-width:760px) {
        font-size: 14px;
    }
`;