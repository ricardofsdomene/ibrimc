import React from "react";

import { Flex, Text, Image } from "@chakra-ui/react";
import { useWindowSize } from "../../utils/useWindowSize";
import Link from "next/link";

export default function Header() {
  const size = useWindowSize();

  return (
    <Flex
      display="flex"
      align="center"
      flexDir="row"
      justify="space-between"
      bg="#333"
      w="100%"
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        height: 70,
      }}
    >
      {/* <Image
        src="logo-h.png"
        style={{
          height: 50,
        }}
      /> */}
      <Flex flexDir="column">
        <Text
          color="#FFF"
          fontWeight="bold"
          fontFamily="Comfortaa"
          fontSize={25}
        >
          IBRIMC
        </Text>
      </Flex>
      {/* <Link href="https://mercuriuscrypto.com">
        <Flex
          cursor="pointer"
          px="4"
          bg="#0C4ACD"
          borderRadius="5"
          justify="center"
          py="2"
          align="center"
        >
          <Text
            color="#FFF"
            fontSize={14}
            fontWeight="bold"
            fontFamily="Comfortaa"
          >
            Quero fazer parte
          </Text>
        </Flex>
      </Link> */}
    </Flex>
  );
}
