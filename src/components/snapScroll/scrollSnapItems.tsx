/* eslint-disable @typescript-eslint/no-use-before-define */

import { useTimeout, useViewportSize } from "@mantine/hooks";
import { styled } from "styled-components";
import list from "./data";

export default function ScrollSnapItems() {
  const { height } = useViewportSize();

  useTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 10, {
    autoInvoke: true
  });

  return (
    <section>
      {list.map((item, index) => (
        <SnapItem
          key={`snap-image-${index}`}
          style={{
            height,
            scrollSnapAlign: "center",
            backgroundImage: `url(${item.url})`
          }}
        />
      ))}
    </section>
  );
}

const SnapItem = styled.div({
  filter: "brightness(60%)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
});
