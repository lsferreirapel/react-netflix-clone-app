import styled from 'styled-components';

export const Container = styled.div`
    background-size: ${props => props.backgroundSize};
    background-position: ${props => props.backgroundPosition};
    background-image: ${props => props.backgroundImage};

    height: 100vh;

    .featured--vertical {
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, var(--bg-primary) 10%, transparent 90%);
    }

    .featured--horizontal {
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, var(--bg-primary) 30%, transparent 70%);
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
    color: var(--netflix-green);
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
    color: color(--gray);
    width: 40%;

    div {
        display: inline-block;
    }

    @media (max-width:760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }
`;
export const Buttons = styled.div`
    margin-top: 15px;
    display: flex;

    .featured--watchbutton, .featured--mylistbutton {
        display: inline-block;
        font-size: 1.6rem;
        font-weight: bold;
        padding: 1rem 2rem;
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
        opacity: .5;
    }

    .featured--watchbutton {
        background-color: var(--white);
        color: #000;
        display: flex;
        align-items: center;

        .play-icon {
            margin-right: 5px;
            font-size: 25px;
        }
    }
    .featured--mylistbutton {
        background-color: rgba(109,109,110,0.7);;
        color: var(--white);
        display: flex;
        align-items: center;
        
        .info-icon {
            margin-right: 5px;
            font-size: 25px;
        }
    }

`;
export const Genres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: var(--gray);

    @media (max-width:760px) {
        font-size: 14px;
    }
`;