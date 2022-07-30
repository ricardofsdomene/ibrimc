import React from "react";
import { useWindowSize } from "../../utils/useWindowSize";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

export default function Jumbotron() {
  const size = useWindowSize();

  return (
    <>
      {size.width > 800 ? (
        <Flex>
          <Image
            src="banks.jpg"
            objectFit="cover"
            style={{
              height: "70vh",
              width: "100%",
            }}
          />
        </Flex>
      ) : (
        <Flex flexDir="column">
          <Image
            objectPosition="left"
            src="banks.jpg"
            objectFit="cover"
            style={{
              height: "50vh",
              width: "100%",
            }}
          />
          <Flex
            style={{
              height: "100vh",
              width: "100%",
            }}
            position="absolute"
          >
            <Flex
              boxShadow="rgba(0,0,0,0.1) 0 0 10px"
              bg="#FAFAFA"
              style={{
                borderRadius: 10,
                marginTop: 60,
                marginLeft: 20,
                height: 100,
                width: 300,
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text color="#333">
                Instituto Brasileiro de Inteligência Financeira & Mercado de
                Capitais
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}
