/* eslint-disable @typescript-eslint/no-use-before-define */

import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { styled } from "styled-components";
import { Group, Text } from "../common";

export default function Start() {
  const [started, { open, close }] = useDisclosure(false);
  const { width } = useViewportSize();

  return (
    <AnimatePresence mode="wait">
      {!started && (
        <Playground
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 1,
            delay: 1
          }}
        >
          <Overlay
            onClick={close}
            exit={{ x: 0 }}
            animate={{ x: -width }}
            initial={{ x: -width }}
            transition={{
              ease: [0.17, 0.67, 0.83, 0.67],
              duration: 1,
              delay: 0.1
            }}
          />
          <Center>
            <Group>
              <UnstyledButton as="button" onClick={open}>
                Start
              </UnstyledButton>
              <MotionIcon
                color="white"
                size={18}
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: 20 }}
                transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1 }}
              />
            </Group>
          </Center>
        </Playground>
      )}
    </AnimatePresence>
  );
}

const MotionIcon = motion(IconArrowRight);

const UnstyledButton = styled(motion(Text))({
  background: "black",
  color: "white",
  border: "none",
  cursor: "pointer"
});

const Playground = styled(motion.div)({
  height: "100vh",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "black",
  zIndex: 99
});

const Center = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Overlay = styled(motion.div)({
  height: "100vh",
  width: "100%",
  backgroundColor: "white",
  position: "absolute",
  top: 0
});
