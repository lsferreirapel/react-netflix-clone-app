import styled from 'styled-components';

/** Dialog header **/
export const TitleContainer = styled.div`
    background-image: url(${props => props.backgroundImg});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
`;

export const LinearGradient = styled.div`
    /* display flex configs */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    /* gradient configs */
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #141414 1%, transparent 99%);
`;

export const CloseButton = styled.div`
    align-self: flex-end;
    margin: 15px;

    .close-button {
        width: 36px;
        height: 36px;
        padding: 20px;
        margin-left: 5px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: #181818;
    }
`;

export const TitleInfo = styled.div`
    padding: 48px;

    /* Movie/TV Name setup */
    .main-title {
        color: var(--white);
        font-size: 60px;
        font-weight: bold;
        cursor: pointer;

        @media (max-width:760px) {
            font-size: 40px;
        }
    }   
`;

export const Buttons = styled.div`
    
    display: flex;
    margin-top: 15px;
    align-items: center;


    /* Buttons default setups */
    .mylist-button, .like-button, .dislike-button {
        width: 36px;
        height: 36px;
        padding: 20px;
        margin-left: 5px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        border: 2px solid rgba(255,255,255,.5);
        background-color: rgba(42,42,42,.6);
    }

    .mylist-button:hover, .like-button:hover, .dislike-button:hover {
        border-color: var(--white);
        background-color: rgba(42,42,42, 1);
    }

    .watch-button {
        display: flex;
        align-items: center;
        justify-content: space-around;

        /* Font congis */
        font-size: 1.6rem;
        font-weight: bold;
        text-decoration: none;
        color: rgb(0,0,0,.9);
        background-color: var(--white);

        /* Size configs */
        padding: 1rem 2rem;
        margin-right: 10px;
        border-radius: 5px;
        
        /* Effects configs */
        opacity: 1;
        transition: all ease .2s;

        @media (max-width:760px) {
            font-size: 16px;
        }
    }
    .watch-button:hover {
        opacity: .8;
    }
`;
/**----------------------------------------------------**/

