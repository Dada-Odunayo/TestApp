import React from "react";
import styled from "styled-components";

const Header = styled.div`
  height: 160px;
  background-color: #292929;
`;
const Text = styled.div`
  position: absolute;
  color: #ffffff;
  padding-top: 54px;
  padding-left: 96px;
  height: 32.94px;
`;
export default function Headers() {
  return (
    <Header>
      <Text>MyTestApp</Text>
    </Header>
  );
}
