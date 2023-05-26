import React, { Component } from "react";
import { Container, Category, Wrapper, Icons, Input, User } from "./style";
import Sidebar from "./Sidebar";
import Body from "./Body";
import logo from "../assets/imgs/logo.png";
import user from "../assets/imgs/user.png";

export default class Youtube extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Category>
            <Icons.Burger />
            <Icons.Logo src={logo} alt="logo" />
          </Category>
          <Category>
            <Input placeholder="search" />
            <Icons.Search />
          </Category>
          <Category end>
            <Icons.Bell />
            <Icons.Menu />
            <Icons.Video />
            <User src={user} alt="user" />
          </Category>
        </Wrapper>

        <Container flex>
          <Sidebar />
          <Body />
        </Container>
      </Container>
    );
  }
}
