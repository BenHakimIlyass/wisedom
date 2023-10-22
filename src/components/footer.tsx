/* eslint-disable @typescript-eslint/no-use-before-define */

import { styled } from "styled-components";
import { Title, Group } from "./common";

export default function Footer() {
  return (
    <Container>
      <Group>
        <Title style={{ fontSize: 18 }}>DINO</Title>
        <Small>21 SEP 2023</Small>
      </Group>
    </Container>
  );
}

const Container = styled.footer({
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 999,
  right: 0,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 40,
  backgroundImage:
    "radial-gradient(rgba(0, 0, 0, 0) 2px, rgba(0, 0, 0, 0.2) 1px)",
  backgroundSize: "4px 4px",
  backdropFilter: "blur(3px)"
});
const Small = styled(Title)({
  fontWeight: 400,
  fontSize: 14,
  marginLeft: 12
});
