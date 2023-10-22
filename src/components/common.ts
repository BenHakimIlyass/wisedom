/* eslint-disable @typescript-eslint/no-use-before-define */

import styled, { createGlobalStyle } from "styled-components";

type GroupProps = { gap?: number };

export const Group = styled.div<GroupProps>(({ gap }) => ({
  display: "flex",
  gap,
  alignItems: "center"
}));

export const Stack = styled.div<GroupProps>(({ gap }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap
}));

export const Text = styled.p({
  fontSize: 14,
  maxWidth: 260
});

type MakePosition = { radius: number; size: number; step: number };

export const makeX = ({ radius, size, step }: MakePosition) =>
  Math.round(size / 2 + radius * Math.cos(-step) - size / 2);

export const makeY = ({ radius, size, step }: MakePosition) =>
  Math.round(size / 2 + radius * Math.sin(step) - size / 2);

export const GlobalStyle = createGlobalStyle({
  body: {
    margin: 0,
    height: "fit-content",
    fontFeatureSettings:
      '"liga", "ss01", "zero", "cv11", "frac", "calt", "tnum"',
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, arial, sans-serif"
  },
  p: {
    margin: 0
  },

  html: {
    scrollSnapType: "y mandatory"
  },

  "::-webkit-scrollbar": {
    height: 0,
    width: 0
  }
});

export const Title = styled.p({
  fontSize: 14,
  fontWeight: 600,
  color: "white"
});

export const inOutMotionConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};
