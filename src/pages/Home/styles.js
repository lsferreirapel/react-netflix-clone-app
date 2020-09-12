import styled from 'styled-components';

export const Page = styled.div`
 .test {
    font-size: 20px;
    position: absolute;
    cursor: pointer;
    z-index: 999;
 }
`;

export const MoviesList = styled.section`
    margin-top: -150px;
`;

export const Loading = styled.div`
    position: fixed;
    left: 0;
    top:0;
    right:0;
    bottom: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
`;