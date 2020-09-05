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

    .watch-button {
        display: flex;
        align-items: center;
        justify-content: space-around;

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

    cursor: default;
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
    font-size: 18px;
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

    a:hover {
        text-decoration: underline;
        cursor:pointer;
    }
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
        font-weight: 700;
        font-size: 24px;
        margin-top: 48px;
        margin-bottom: 20px;
        color: #FFF;
    }
`;
export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 31.5%);
    grid-gap: 1.2em;
    justify-content: space-around;
`;


export const ListCard = styled.div`
    background-color: #2f2f2f;
    display: flex;
    flex-flow: column wrap;
    font-size: 16px;
    border-radius: .25em;
    overflow: hidden;
    margin-top: 10px;

    .list-card-image {
        width: 100%;
        height: 22vh;
    }
    .list-card-info {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1em;

        .card-info-rate {
            color: #46d369;
            font-weight: bold;
        }
        .card-info-year {
            color: #fff;
            font-weight: bold;
        }

    }
    .list-card-description {
        align-items: flex-start;
        padding: 0 1em 1em;
        color: #d2d2d2;
        font-size: 14px;
        line-height: 20px;
    }
`;
/**----------------------------------------------------**/

export const SectionDivider = styled.div`
    width: 100%;
    height: 6em;
    border-bottom: 2px solid #404040;
    display: flex;
    background: transparent;
    position: relative;
    display: flex;
    align-items: center;
    justify-content:center;

    .arrow-button {
        display: flex;
        align-items: center;
        border-radius: 50%;
        background-color: #2a2a2a;
        border: 1px solid rgba(255, 255, 255, .7);
        color: white;
        position: absolute;
        bottom: -18px;
        padding: .8rem;
        cursor: pointer;
    }
`

/* Dialog about style */
export const About = styled.div`

    .sugestion-title {
        font-weight: 700;
        font-size: 24px;
        margin-top: 48px;
        margin-bottom: 20px;
        color: #FFF;
    }
`;
export const AboutInfo = styled.div`

`;

const aboutDefault = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin-left: 0;
    word-break: break-word;
    color: #FFF;
    margin: 7px;
    margin-left: 0;
    color: #fff;

    a:hover {
        text-decoration: underline;
        cursor:pointer;
    }
    .tag-name {
        color: #777;
    }
    a {

    }
`;
export const Director = styled(aboutDefault)`
    
`;
export const AboutCast = styled(aboutDefault)`
    
`;
export const AboutScript = styled(aboutDefault)`
    
`;
export const AboutGenres = styled(aboutDefault)`
    
`;
export const AboutTags = styled(aboutDefault)`

`;
/**----------------------------------------------------**/


