import React from "react";
import styled from "styled-components";
import background from "../Images/background.svg";

const BackDrop = styled.div`
  height: 550px;
  background-image: url(${background});
`;

const Text = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
  box-sizing: border-box;
  display: table-caption;
  color: #fff;
  font-family: Oswald, sans-serif;
  font-weight: bold;
  font-size: 72px;
  padding-left: 77px;
  padding-top: 109px;
  text-align: left;
`;

export default function LowerNav() {
  return (
    <BackDrop>
      <Text>Watch Something Incredible.</Text>
    </BackDrop>
  );
}
