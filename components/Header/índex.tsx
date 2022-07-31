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
      bg="#FFF"
      w="100%"
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        height: 80,
      }}
    >
      <Flex flexDir="row" align="center">
        <Text
          cursor="pointer"
          color="#333"
          fontWeight="bold"
          fontFamily="Comfortaa"
          fontSize={16}
        >
          Ibrimc
        </Text>
      </Flex>
        <Flex
          _hover={{
            backgroundColor: "#000",
            color: "#FFF",
          }}
          cursor="pointer"
          style={{
            width: 200,
            height: 45,
          }}
          borderRadius="5"
          border="2px solid #333"
          justify="center"
          align="center"
          fontWeight="bold"
          color="#333"
        >
          Quero me inscrever
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
