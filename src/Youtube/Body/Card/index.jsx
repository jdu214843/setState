import React, { Component } from "react";
import { Container, Video, Wrapper, User, Title } from "./style";

export default class Youtube extends Component {
  render() {
    const { user, video, name, view, time } = this.props;
    return (
      <Container>
        <Video src={video} alt="video content" />
        <Wrapper>
          <User src={user} />
          <div>
            <Title>Lorem ipsum is dolor smith text of end.</Title>
            <Title desc upper>
              {name}
            </Title>
            <div style={{ display: "flex" }}>
              <Title desc>
                {view} {time}
              </Title>
            </div>
          </div>
        </Wrapper>
      </Container>
    );
  }
}
