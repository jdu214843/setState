import Styled from "styled-components";

export const Container = Styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    overflow-y: scroll;

`;

export const Wrapper = Styled.div`
    margin: 10px 0px;
`;

export const Title = Styled.div`
    display:flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    height: 40px;
    color: ${({ title }) => (title ? "rgba(255, 255, 255, 0.6)" : "#fff")};
    margin-left: 24px;
`;

export const ItemStlye = Styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;

`;
