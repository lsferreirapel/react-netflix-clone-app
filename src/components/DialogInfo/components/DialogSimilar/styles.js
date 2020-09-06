import styled from 'styled-components';

/* Dialog sugestion list style */
export const Sugestion = styled.div`

    .sugestion-title {
        font-weight: 700;
        font-size: 24px;
        margin-top: 48px;
        margin-bottom: 20px;
        color: var(--white);
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
            color: var(--netflix-green);
            font-weight: bold;
        }
        .card-info-year {
            color: var(--white);
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
