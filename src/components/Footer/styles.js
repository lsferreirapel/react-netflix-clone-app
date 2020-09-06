// importing styled-components lib
import styled from 'styled-components'

export const Container = styled.footer`
    margin: 50px 0 20px 0;
    text-align: center;
    color: var(--gray);
    font-size: 1.3rem;

    a {
        transition: all ease .6s;
        font-weight: bold;
        text-decoration: none;
        color: var(--gray);

        :hover {
            color: var(--netflix-red);
            cursor: pointer
        }
    }
`;

export const Icons = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin: 10px;
        margin-bottom: 16px;
        width: 40px;
        opacity: 1;
        transform: scale(1);
        transition: opacity ease .6s;
    }
    img:hover {
        transform: scale(1.05);
        cursor: pointer;
        opacity: .5;
    }
`;