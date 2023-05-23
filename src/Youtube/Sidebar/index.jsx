import React, { Component } from "react";
import { sidebar } from "../../utils/saidbar";
import { Container, Wrapper, Title, ItemStlye } from "./style";
export default class Youtube extends Component {
  render() {
    return (
      <Container>
        {sidebar.map(({ icons, id, title, data }) => (
          <Wrapper key={id}>
            {title && <Title title>{title}</Title>}
            {data.map(({ icons: Icon, title: subTitle }) => (
              <ItemStlye>
                <Icon />
                <Title>{subTitle}</Title>
              </ItemStlye>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
