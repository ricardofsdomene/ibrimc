import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useWindowSize } from "../../utils/useWindowSize";

export default function Hero() {
  const size = useWindowSize();

  function Mobile() {
    return (
      <Flex>
        <Image
          loading="eager"
          src="lucas0.jpeg"
          style={{
            borderRadius: 15,
            height: 300,
            width: 300,
          }}
        />
      </Flex>
    );
  }

  function Desktop() {
    return (
      <Flex>
        <Image
          loading="eager"
          src="lucas0.jpeg"
          style={{
            borderRadius: 15,
            height: 300,
            width: 300,
          }}
        />
      </Flex>
    );
  }

  return <>{size.width < 800 ? <Mobile /> : <Desktop />}</>;
}
