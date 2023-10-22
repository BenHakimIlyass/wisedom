/* eslint-disable @typescript-eslint/no-use-before-define */
import { useViewportSize } from "@mantine/hooks";
import { useScroll, useTransform, motion } from "framer-motion";
import { Fragment } from "react";
import styled from "styled-components";
import { inOutMotionConfig } from "../../common";

import list from "../data";
import DigitCard from "./digitCard";

export default function CircleCard({ offset = 0 }) {
  const { scrollY } = useScroll();
  const { height } = useViewportSize();

  const dynamicScrollY = useTransform(scrollY, () => scrollY.get() - offset);

  const scrollMotion = useTransform(dynamicScrollY, [0, height], [0, 1], {
    clamp: false
  });

  return (
    <Container {...inOutMotionConfig}>
      <Circle size={height}>
        {list.map((item, index) => (
          <Fragment key={`digitCard-${index}`}>
            <DigitCard
              size={height}
              index={index}
              scrollMotion={scrollMotion}
              length={list.length}
              {...item}
            />
          </Fragment>
        ))}
      </Circle>
    </Container>
  );
}

type CircleProps = { size: number };

const Circle = styled.div<CircleProps>(({ size }) => ({
  border: "1px solid gray",
  borderRadius: 999,
  width: size,
  height: size,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

const Container = styled(motion.div)({
  display: "flex",
  alignItems: "center",
  zIndex: 100,
  position: "fixed",
  height: "100vh",
  top: 0,
  transform: `translate3d(-80%, 0, 0)`,
  "@media only screen and (max-width: 768px)": {
    transform: `translate3d(-90%, 0, 0)`
  }
});
