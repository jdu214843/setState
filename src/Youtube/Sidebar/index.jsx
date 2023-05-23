import React, { Component } from "react";
import { Container, Wrapper, Title } from "./style";
import { sidebar } from "../../utils/saidbar";
export default class Youtube extends Component {
  render() {
    return (
      <Container>
        {sidebar.map((value) => (
          <Wrapper key={value.id}>
            {value.title && <Title title>{value.title}</Title>}
            {value.data.map((data) => (
              <Title>{data.title}</Title>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
