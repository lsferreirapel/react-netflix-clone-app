import styled from 'styled-components';

/**  Component container **/
export const Container = styled.div``;

/** Dialog container **/
export const DialogContainer = styled.div`

`;
export const MainContent = styled.div``;
/**----------------------------------------------------**/ 


/** Dialog title **/
export const TitleContainer = styled.div`
    background-image: url("https://image.tmdb.org/t/p/original/7XEtHQoy1hwa8XWaOkSv3rlteea.jpg");
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
        color: #fff;
        font-size: 60px;
        font-weight: bold;

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

    .watch-button {
        display: inline-block;

        /* Font congis */
        font-size: 1.6rem;
        font-weight: bold;
        text-decoration: none;
        color: rgb(0,0,0,.9);
        background-color: #FFF;

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
`;
/**----------------------------------------------------**/

/** Dialog info content **/ 
export const MainInfo = styled.div`
    display: flex; 
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const RateInfo = styled.div`
    display: flex;
    flex-flow: row wrap;
    font-size: 16px;
    width: 70%;
    color: #FFF;

    .rate, .year, .duration {
        margin-right: 8px;
    }

    .rate {
        color: #46d369;
        font-weight: bold;
    }

    .year {

    }

    .duration {
        flex-grow: 1;
    }
`;
export const Description = styled.div`
    margin: 18px 0 9px 0;
    width: 90%;
`;

export const FilmInfo = styled.div`
    width: 30%;
    font-size: 14px;
    line-height: 20px;
    
    margin-left: 0;
    word-break: break-word;
    color: #FFF;
`;

const fimeInfoItem = styled.div`
    margin: 7px;
    margin-left: 0;

    .name{
        color: #777;
    };
    .seemore {
        font-style: italic;
    }
`
export const Cast = styled(fimeInfoItem)`
        
`;
export const Tags = styled(fimeInfoItem)`

`;
export const Genres = styled(fimeInfoItem)`

`;


/**----------------------------------------------------**/


/* Dialog sugestion list style */
export const Sugestion = styled.div`

    .sugestion-title {

    }
`;
export const List = styled.div``;
/**----------------------------------------------------**/


/* Dialog about style */
export const About = styled.div`

    .sugestion-title {

    }
`;
export const AboutInfo = styled.div`

`;

const tagName = styled.span`

`;
export const Director = styled.div`
    .tag-name{${tagName}}
`;
export const AboutCast = styled.div`
    .tag-name{${tagName}}
`;
export const Script = styled.div`
    .tag-name{${tagName}}
`;
export const AboutGenres = styled.div`
    .tag-name{${tagName}}
`;
/**----------------------------------------------------**/


