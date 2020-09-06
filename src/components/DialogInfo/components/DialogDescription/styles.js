import styled from 'styled-components';

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
    color: var(--white);

    .rate, .year, .duration {
        margin-right: 8px;
    }

    .rate {
        color: var(--netflix-green);
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
    color: var(--white);
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
