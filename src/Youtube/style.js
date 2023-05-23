import Styled from "styled-components";
import { ReactComponent as burger } from "../assets/icons/navBtn.svg";
import { ReactComponent as search } from "../assets/icons/search.svg";
import { ReactComponent as bell } from "../assets/icons/bell.svg";
import { ReactComponent as menu } from "../assets/icons/marketplace.svg";
import { ReactComponent as video } from "../assets/icons/camera.svg";

export const Container = Styled.div`
    display: flex;
    flex-direction: ${({ flex }) => !flex && "column"};
    background-color: #212121;
    color: #fff;
    padding: ${({ flex }) => !flex && "0px 30px"};

`;

export const Wrapper = Styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
     background: #212121;
`;
export const Category = Styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: ${({ end }) => end && "flex-end"};
`;

export const Icons = Styled.div``;

Icons.Burger = Styled(burger)`
    width: 24px;
    height: 24px;
`;
Icons.Bell = Styled(bell)`
    width: 24px;
    height: 24px;
    margin-left: 20px;
    cursor: pointer;
`;
Icons.Menu = Styled(menu)`
    width: 20px;
    height: 20px;
    margin-left: 20px;
    cursor: pointer;
`;
Icons.Video = Styled(video)`
    width: 30px;
    height: 30px;
    margin-left: 20px;
    cursor: pointer;
`;

Icons.Logo = Styled.img``;
Icons.Search = Styled(search)`
    width: 65px;
    height: 40px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0px 2px 2px 0px;
    cursor: pointer;
`;

export const Input = Styled.input`
    height: 40px;
    width: 100%;
    max-width: 500px;
    background:#000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2px 0px 0px 2px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    padding-left: 10px;

        outline: none;

`;

export const User = Styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
`;
