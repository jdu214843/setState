import React, { Component } from "react";
import { Container } from "./style";
import Card from "./Card";
import Style from "styled-components";
import { data } from "../../mock";

export const Sheet = Style.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;
export default class Youtube extends Component {
  render() {
    return (
      <Container>
        {data.map((value) => (
          <Card
            view="1MLN"
            time="10 minuts before"
            name={"Webbrain Avademy"}
            user={
              "https://i.ytimg.com/vi/qmgjNfhYfTs/hq720_2.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLA9bDsxyi942MFxIX3PS_P4kFqhtw"
            }
            video={
              "https://yt3.googleusercontent.com/0MxhUKXGNo28gyw5Yl5GS4CBKEOlgV-E_yoTRfBHkDaZEcf2f-SM7uEB83dIeSzl-oy9tTO6DQ=s900-c-k-c0x00ffffff-no-rj"
            }
          />
        ))}
        ;
      </Container>
    );
  }
}
