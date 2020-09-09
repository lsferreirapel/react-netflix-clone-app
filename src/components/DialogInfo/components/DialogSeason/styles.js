import styled from 'styled-components';

export const SeasonList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 16px;

    font-size: 16px;
    color: #fff;
`;
export const SeasonHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;

    .section-title {
        width: 20%;
        font-weight: 700;
        font-size: 24px;
        margin-top: 48px;
        margin-bottom: 20px;
    }

    .dropdown-toggle {
        display: flex;
        align-items: center;
        min-width: 4em;
        position: relative;
        font-size: 1.2em;
        background-color: rgb(36, 36, 36);
        padding: .5em 1em;
        border: .1em solid rgb(77, 77, 77);
        border-radius: .2em;
        height: 43px;
        align-self: flex-end;
    }
`;
export const EpisodeList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
`;
export const EpisodeItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1em;
    border-bottom: 1px solid #404040;
    border-radius: .25em;

    :first-child {
        background-color: #333;
    }

`;
export const Index = styled.div`
    width: 5%;
    font-size: 1.5em;
`;
export const Image = styled.div`
    background: url(${props => props.background});
    background-size: cover;
    background-position: center;
    width: 20.5%;
    height: 11.5vh;
    border-radius: .25em;
    overflow: hidden;
`;
export const MetaData = styled.div`

    display: flex;
    flex-direction: column;
    width: 75%;

    .episode-item-title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1em;
        padding-bottom: .5em;

        .episode-title-info {

        }

        .episode-duration {

        }
    }

    .small-overview {
        font-size: 14px;
        line-height: 20px;
        color: #d2d2d2;
        padding: 0 1em 1em;
        margin: 0;
    }

`;