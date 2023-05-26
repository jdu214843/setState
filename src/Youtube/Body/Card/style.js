import Styled from "styled-components";

export const Container = Styled.div`
    width: 330px; 
    height: 300px; 
    margin-right: 20px; 
    margin-bottom: 40px;
`;

export const Video = Styled.img`
    width: 100%; 
    height: 200px; 
`;
export const Wrapper = Styled.div`
    display:flex; 
`;
export const User = Styled.img`
    width: 36px;
    height: 40px;
    border-radius:50%;
    margin-right: 15px;
`;

export const Title = Styled.div`
    font-family: Roboto;
    font-style:normal;
    font-weight: normal;
    font-size:16px;
    text-transform:${({ upper }) => (upper ? "uppercase" : "lowercase")};
    line-height:22px;
    color: ${({ desc }) => (desc ? "rgba(255, 255, 255, 0.6)" : "#fff")};
`;
