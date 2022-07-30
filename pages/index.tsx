import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Header from "../components/Header/índex";
import { useWindowSize } from "../utils/useWindowSize";

import {
  GrDocumentPerformance,
  GrDocumentStore,
  GrDocumentUpload,
} from "react-icons/gr";

import { BiTargetLock, BiUser, BiUserPin } from "react-icons/bi";

export default function Index() {
  const size = useWindowSize();

  const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
  const Jumbotron = dynamic(() => import("../components/Jumbotron"), {
    ssr: false,
  });

  function ForWho() {
    return (
      <Flex
        zIndex="10"
        style={{
          marginTop: 90,
        }}
      >
        <Text
          fontSize={40}
          w="100%"
          textAlign="center"
          color="#333"
          fontFamily="Comfortaa"
        >
          Para quem é o curso?
        </Text>
      </Flex>
    );
  }

  function Focus() {
    return (
      <Flex>
        <Text color="#333">
          Um dos seus objetivos é auxiliar pessoas a investirem com foco em
          segurança e preservação patrimonial, com pensamento de longo prazo.
          Após anos de estudos e muita experiência no dia a dia com
          investidores, compilou e sistematizou as informações-chave para quem
          deseja comecar a investir. Assim, o conhecimento que antes era
          compartilhado apenas com clientes foi organizado para alunos em uma
          linquagem simples e através de uma metodologia que prioriza as
          melhores referências didáticas da atualidade.
        </Text>
      </Flex>
    );
  }

  function Modules() {
    return (
      <Flex
        py="10"
        flexDir="column"
        justify="space-between"
        h="75vh"
        w="100%"
        bg="#FAFAFA"
      >
        <Flex
          flexDir="column"
          style={{
            paddingLeft: 40,
          }}
        >
          <Text
            fontSize={size.width < 800 ? 30 : 40}
            fontFamily="Comfortaa"
            fontWeight="extrabold"
            color="#000"
            w="90%"
          >
            Mais de 1.000 investimentos ao seu alcance
          </Text>
          <Text
            fontSize={size.width < 800 ? 18 : 24}
            mt="2"
            fontFamily="Comfortaa"
            color="#000"
            w="80%"
          >
            Se precisar de ajuda, aqui você tem atendimento humanizado 24h por
            dia, 7 dias por semana.
          </Text>
        </Flex>
        <Flex mt="4" flexDir="column">
          <Flex overflowX="scroll" pb="5">
            <Flex
              flexDir="column"
              mr="4"
              justify="center"
              style={{
                marginLeft: 40,
                backgroundColor: "#DAFAFA",
                height: 200,
                width: 240,
                borderRadius: 10,
                padding: 20,
              }}
            >
              <Icon as={GrDocumentUpload} fontSize={33} color="#333" />
              <Text
                mt="4"
                style={{
                  width: 240,
                }}
                color="#333"
                fontWeight="bold"
              >
                Como adquirir Inteligencia Financeira
              </Text>
            </Flex>
            <Flex
              flexDir="column"
              mr="4"
              justify="center"
              style={{
                backgroundColor: "#DAFAFA",
                height: 200,
                width: 230,
                borderRadius: 10,
                padding: 20,
              }}
            >
              <Icon as={GrDocumentStore} fontSize={33} color="#333" />
              <Text
                mt="4"
                style={{
                  width: 230,
                }}
                color="#333"
                fontWeight="bold"
              >
                Como acessar produtos financeiros
              </Text>
            </Flex>
            <Flex
              flexDir="column"
              mr="4"
              justify="center"
              style={{
                backgroundColor: "#DAFAFA",
                height: 200,
                width: 250,
                borderRadius: 10,
                padding: 20,
              }}
            >
              <Icon as={BiUser} fontSize={44} color="#333" />
              <Text
                mt="4"
                style={{
                  width: 230,
                }}
                color="#333"
                fontWeight="bold"
              >
                Em qual perfil de investidor você se enquadra
              </Text>
            </Flex>
            <Flex
              flexDir="column"
              mr="4"
              justify="center"
              style={{
                backgroundColor: "#DAFAFA",
                height: 200,
                width: 260,
                borderRadius: 10,
                padding: 20,
              }}
            >
              <Icon as={GrDocumentPerformance} fontSize={33} color="#333" />
              <Flex
                style={{
                  width: 250,
                }}
              />
              <Text mt="4" w="100%" color="#333" fontWeight="bold">
                Como avaliar a performance de um investimento
              </Text>
            </Flex>
            <Flex
              flexDir="column"
              mr="4"
              justify="center"
              style={{
                backgroundColor: "#DAFAFA",
                height: 200,
                width: 260,
                borderRadius: 10,
                padding: 20,
              }}
            >
              <Icon as={BiTargetLock} fontSize={33} color="#333" />
              <Flex
                style={{
                  width: 250,
                }}
              />
              <Text mt="4" w="100%" color="#333" fontWeight="bold">
                Quais os tipos de objetivos financeiros
              </Text>
            </Flex>
            <Flex style={{
              width: 5,
              height: 20
            }}>
              <Text style={{ width: 5 }} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" bg="#FFF" w="100%">
      <Header />
      <Jumbotron />
      <Modules />
      <Hero />
      {/* <ForWho /> */}
    </Flex>
  );
}
