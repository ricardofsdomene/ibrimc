import { Box, Flex, Image, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Header from "../components/Header/índex";
import { useWindowSize } from "../utils/useWindowSize";

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
        py="20"
        style={{
          paddingLeft: 20,
        }}
        flexDir="column"
        justify="space-between"
        h="100vh"
        w="100%"
        bg="#FAFAFA"
      >
        <Flex flexDir="column">
          <Text
            fontSize={size.width < 800 ? 30 : 55}
            fontFamily="Comfortaa"
            fontWeight="extrabold"
            color="#000"
            w="90%"
          >
            Mais de 1.000 investimentos ao seu alcance
          </Text>
          <Text
            fontSize={size.width < 800 ? 18 : 33}
            mt="4"
            fontFamily="Comfortaa"
            color="#000"
            w="60%"
          >
            Se precisar de ajuda, aqui você tem atendimento humanizado 24h por
            dia, 7 dias por semana.
          </Text>
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
      <ForWho />
    </Flex>
  );
}
