import styled from 'styled-components';

/* Dialog about style */
export const About = styled.div`

    .sugestion-title {
        font-weight: 700;
        font-size: 24px;
        margin-top: 48px;
        margin-bottom: 20px;
        color: var(--white);
    }
`;
export const AboutInfo = styled.div`

`;

const aboutDefault = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin-left: 0;
    word-break: break-word;
    color: var(--white);
    margin: 7px;
    margin-left: 0;

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


