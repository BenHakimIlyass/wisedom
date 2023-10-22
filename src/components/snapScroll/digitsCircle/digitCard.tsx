/* eslint-disable @typescript-eslint/no-use-before-define */
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";
import { Group, makeX, makeY, Stack, Text, Title } from "../../common";

const springConfig = { stiffness: 1000, damping: 100, mass: 1 };

const DigitCard = ({
  index,
  size,
  scrollMotion,
  length,
  title,
  author
}: {
  index: number;
  size: number;
  scrollMotion: MotionValue<number>;
  length: number;
  title: string;
  author: string;
}) => {
  const makeStep = (scrollMotionValue: number) =>
    ((2 * Math.PI) / length) * (index - scrollMotionValue);
  const radius = size * 0.7;

  // transforming the scroll motion value to an x and y motion value
  const interpolatedX = useTransform(scrollMotion, () =>
    makeX({ radius, size, step: makeStep(scrollMotion.get()) })
  );

  const interpolatedY = useTransform(scrollMotion, () =>
    makeY({ radius, size, step: makeStep(scrollMotion.get()) })
  );

  // x, y, opacity and rotation of the whole digit card
  const x = useSpring(interpolatedX, springConfig);
  const y = useSpring(interpolatedY, springConfig);
  const rotate = useTransform(interpolatedY, [-200, 0, 200], [-30, 0, 30]);
  const opacity = useTransform(interpolatedY, [-200, 0, 200], [0.2, 1, 0.2]);

  // dot scale
  const scale = useTransform(interpolatedY, [-200, 0, 200], [0.8, 1, 0.8]);

  return (
    <Container style={{ x, y, rotate, opacity }}>
      <Group gap={40}>
        <Dot style={{ scale }} />
        <Group gap={22}>
          <Digit>0{index}</Digit>
          <Stack gap={4}>
            <Title>{title}</Title>
            <Text>{author}</Text>
          </Stack>
        </Group>
      </Group>
    </Container>
  );
};

const Container = styled(motion.div)({
  position: "absolute",
  color: "white"
});

const Dot = styled(motion.div)({
  width: 12,
  height: 12,
  borderRadius: 999,
  backgroundColor: "white"
});

const Digit = styled.p({
  fontSize: 48,
  fontWeight: 600
});

export default DigitCard;
