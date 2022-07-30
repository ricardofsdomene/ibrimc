import React from "react";
import { useWindowSize } from "../../utils/useWindowSize";
import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import mypic from "../../public/banks.jpg";

export default function Jumbotron() {
  const size = useWindowSize();

  return (
    <>
      {size.width > 800 ? (
        <Flex>
          <Image
            src={mypic}
            alt="Picture of the author"
            width={size.width}
            height={(size.height / 100) * 70}
          />
          <Flex
            style={{
              height: (size.height / 100) * 70,
              width: "100%",
            }}
            align="center"
            position="absolute"
          >
            <Flex
              justify="space-between"
              flexDir="column"
              boxShadow="rgba(0,0,0,0.1) 0 0 10px"
              bg="#FAFAFA"
              style={{
                height: 330,
                width: 600,
                borderRadius: 10,
                marginLeft: 70,
                padding: 30,
              }}
            >
              <Flex flexDir="column">
                <Text
                  fontFamily="Comfortaa"
                  fontWeight="bold"
                  fontSize={26}
                  color="#333"
                >
                  Instituto Brasileiro de Inteligência Financeira & Mercado de
                  Capitais
                </Text>
                <Text
                  fontFamily="Comfortaa"
                  fontWeight="bold"
                  fontSize={18}
                  color="#333"
                  mt="2"
                  w="80%"
                >
                  Importamte para recuperar a saúde financeira de quem está
                  endividado ou, simplesmente, sem recursos para dar passos
                  maiores em busca da realização de sonhos.
                </Text>
              </Flex>
              <Flex
                _hover={{
                  backgroundColor: "#0c4acd",
                  color: "#FFF",
                }}
                cursor="pointer"
                mt="4"
                w="100%"
                style={{
                  height: 50,
                }}
                borderRadius="5"
                border="2px solid #0c4acd"
                justify="center"
                align="center"
                fontWeight="bold"
                color="#0c4acd"
              >
                Quero saber mais
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex flexDir="column">
          <Image
            src={mypic}
            alt="Picture of the author"
            width={size.width}
            height={(size.height / 100) * 50}
          />
          <Flex
            style={{
              height: (size.height / 100) * 50,
              width: "100%",
            }}
            mt="3"
            justify="center"
            align="center"
            position="absolute"
          >
            <Flex
              justify="space-between"
              flexDir="column"
              boxShadow="rgba(0,0,0,0.1) 0 0 10px"
              bg="#FAFAFA"
              style={{
                height: 290,
                borderRadius: 10,
                marginLeft: 20,
                marginRight: 20,
                padding: 30,
              }}
            >
              <Flex flexDir="column">
                <Text
                  fontFamily="Comfortaa"
                  fontWeight="bold"
                  fontSize={18}
                  color="#333"
                >
                  Instituto Brasileiro de Inteligência Financeira & Mercado de
                  Capitais
                </Text>
                <Text
                  fontFamily="Comfortaa"
                  fontWeight="bold"
                  fontSize={12}
                  color="#333"
                  mt="2"
                  w="80%"
                >
                  Importamte para recuperar a saúde financeira de quem está
                  endividado ou, simplesmente, sem recursos para dar passos
                  maiores em busca da realização de sonhos.
                </Text>
              </Flex>
              <Flex
                _hover={{
                  backgroundColor: "#0c4acd",
                  color: "#FFF",
                }}
                cursor="pointer"
                mt="4"
                w="100%"
                style={{
                  height: 50,
                }}
                borderRadius="5"
                border="2px solid #0c4acd"
                justify="center"
                align="center"
                fontWeight="bold"
                color="#0c4acd"
              >
                Quero saber mais
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}
