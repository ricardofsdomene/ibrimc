import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Header from "../components/Header/índex";
import { useWindowSize } from "../utils/useWindowSize";

import { GiAbstract114, GiBarbedStar, GiCycle } from "react-icons/gi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsChat,
  BsFillPatchCheckFill,
} from "react-icons/bs";

import ReactFullpage from "@fullpage/react-fullpage"; // will return static version on server and "live" version on client

import {
  GrDocumentPerformance,
  GrDocumentStore,
  GrDocumentUpload,
} from "react-icons/gr";

import { BiTargetLock, BiUser, BiUserPin } from "react-icons/bi";
import Hero from "../components/Hero";

export default function Index() {
  const size = useWindowSize();

  function Modules() {
    return (
      <Flex
        py="5"
        flexDir="column"
        justify="space-between"
        h={size.height - 60}
        w="100%"
        bg="#000"
      >
        <Flex
          flexDir="column"
          style={{
            paddingLeft: 20,
          }}
        >
          <Flex flexDir="row" align="center">
            <Image
              boxShadow="rgba(0,0,0,0.1) 0 0 10px"
              loading="eager"
              src="data:image/jpeg;base64,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"
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              mr="4"
            />
            <Text
              cursor="pointer"
              color="#FFF"
              fontWeight="bold"
              fontFamily="Comfortaa"
              fontSize={20}
            >
              Olá, eu sou o Lucas
            </Text>
          </Flex>
          <Text
            mt="6"
            fontSize={size.width < 800 ? 25 : 30}
            fontWeight="extrabold"
            color="#FFF"
          >
            E esse é o
          </Text>
          <Text
            fontSize={size.width < 800 ? 25 : 30}
            fontWeight="extrabold"
            color="#FFF"
          >
            Instituto Brasileiro de Inteligência Financeira
          </Text>
          <Text
            fontSize={size.width < 800 ? 25 : 30}
            fontWeight="extrabold"
            color="#FFF"
          >
            & Mercado de Capitais
          </Text>
          <Text
            w={size.width < 800 ? 360 : 520}
            fontSize={size.width < 800 ? 14 : 18}
            mt="2"
            color="#EEE"
          >
            Importante para recuperar a saúde financeira de quem está endividado
            ou, simplesmente, sem recursos para dar passos maiores em busca da
            realização de sonhos.{" "}
          </Text>
        </Flex>
        <Text
          mt="4"
          color="#AAA"
          fontSize={12}
          style={{
            marginLeft: 20,
          }}
        >
          Arraste para ver um pouco do que iremos apresentar nesse curso
        </Text>
        <Flex mt="5" flexDir="column">
          <Flex overflowX="scroll" pb="5">
            <Flex
              flexDir="column"
              mr="4"
              justify="center"
              style={{
                marginLeft: 20,
                backgroundColor: "#FFF",
                height: 200,
                width: 240,
                borderRadius: 10,
                padding: 20,
              }}
            >
              <Icon as={GrDocumentUpload} fontSize={33} color="#333" />
              <Text
                mt="2"
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
                backgroundColor: "#FFF",
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
                backgroundColor: "#FFF",
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
                backgroundColor: "#FFF",
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
                backgroundColor: "#FFF",
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
            <Flex
              style={{
                width: 5,
                height: 20,
              }}
            >
              <Text style={{ width: 5 }} />
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDir="column"></Flex>
      </Flex>
    );
  }

  function Risks() {
    return (
      <Flex flexDir="column">
        <Flex
          flexDir="column"
          bg="#000"
          py="5"
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 80,
          }}
        >
          <Text
            fontWeight="bold"
            color="#FFF"
            w={size.width > 800 ? "70%" : "100%"}
            maxW={600}
            fontSize={size.width < 800 ? 25 : 35}
          >
            Para onde remar neste Oceano de Informações chamado internet?{" "}
          </Text>
          <Text
            mt="2"
            fontWeight="bold"
            color="#00F269"
            w={size.width > 800 ? "70%" : "100%"}
            maxW={600}
            fontSize={size.width < 800 ? 14 : 20}
          >
            Conteúdos sobre o mercado financeiro circulam na internet de forma
            desordenada (muitas vezes incompletas ou inverídicas) publicadas por
            fontes com diferentes interesses.{" "}
          </Text>
        </Flex>
        <Flex
          bg="#000"
          style={{
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Flex
            borderRadius="10"
            flexDir="column"
            bg="#00b069"
            w="100%"
            style={{
              paddingTop: 50,
              paddingBottom: 60,
              paddingLeft: size.width < 800 ? 20 : 150,
              paddingRight: size.width < 800 ? 20 : 150,
            }}
          >
            <Text
              color="#FFF"
              w="100%"
              textAlign="center"
              fontWeight="bold"
              fontSize={40}
            >
              ⚠️
            </Text>
            <Text
              mt="5"
              color="#FFF"
              w="100%"
              textAlign="center"
              fontWeight="bold"
              fontSize={size.width < 800 ? 13 : 25}
            >
              Ao consumir esses conteúdos de forma aleatória e desorganizada,
              você corre um sério risco de ser negativamente influenciado nessa
              área essencial da sua vida.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function Solution() {
    return (
      <Flex
        bg="#000"
        w="100%"
        style={{
          paddingTop: 60,
          paddingBottom: 60,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        flexDir="column"
      >
        <Text
          mt="4"
          color="#FFF"
          fontSize={size.width < 800 ? 20 : 30}
          fontWeight="bold"
        >
          Por outro lado, consumir um conteúdo organizado de forma sistemática e
          inteligente é imprescindível para administrar melhor os seus recursos
          financeiros com foco em segurança e performance.
        </Text>
        <Flex
          flexDir={size.width < 800 ? "column" : "row"}
          mt="10"
          justify="space-between"
        >
          <Flex
            justify="center"
            align="center"
            flexDir="column"
            bg="#FFF"
            w={size.width < 800 ? "100%" : "33%"}
            boxShadow="rgba(255,255,255,0.9) 0 0 10px"
            borderRadius="10"
            p="10"
          >
            <Icon as={GiCycle} color="green" fontSize={40} />
            <Text
              color="green"
              w="100%"
              textAlign="center"
              fontWeight="bold"
              mt="4"
              fontFamily="Comfortaa"
            >
              Entenda os ciclos do Mercado Financeiro
            </Text>
          </Flex>
          <Flex
            mt={size.width < 800 ? "4" : "0"}
            ml={size.width < 800 ? "0" : "4"}
            w={size.width < 800 ? "100%" : "33%"}
            justify="center"
            align="center"
            flexDir="column"
            bg="#FFF"
            boxShadow="rgba(255,255,255,0.9) 0 0 10px"
            borderRadius="10"
            p="10"
          >
            <Icon as={GiAbstract114} color="green" fontSize={40} />
            <Text
              color="green"
              w="100%"
              textAlign="center"
              fontWeight="bold"
              mt="4"
              fontFamily="Comfortaa"
            >
              Decida melhor em relação às suas finanças
            </Text>
          </Flex>
          <Flex
            ml={size.width < 800 ? "0" : "4"}
            mt={size.width < 800 ? "4" : "0"}
            w={size.width < 800 ? "100%" : "33%"}
            justify="center"
            align="center"
            flexDir="column"
            bg="#FFF"
            boxShadow="rgba(255,255,255,0.9) 0 0 10px"
            borderRadius="10"
            p="10"
          >
            <Icon as={GiBarbedStar} color="green" fontSize={40} />
            <Text
              color="green"
              w="100%"
              textAlign="center"
              fontWeight="bold"
              mt="4"
              fontFamily="Comfortaa"
            >
              Identifique boas oportunidades do Mercado Financeiro
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function Reviews() {
    const [page, setPage] = useState<0 | 1 | 2>(0);

    return (
      <Flex
        flexDir="column"
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        <Flex w="100%" align="center" justify="space-between">
          <Text fontSize={30} color="#000" fontWeight="bold">
            Veja o quê nossos alunos estão dizendo sobre o curso
          </Text>
          <Flex>
            <Flex
              cursor="pointer"
              _hover={{
                backgroundColor: "#BBB",
              }}
              mr="2"
              bg="#EEE"
              justify="center"
              align="center"
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
              }}
            >
              <Icon as={BsArrowLeft} color="#333" fontSize={16} />
            </Flex>
            <Flex
              _hover={{
                backgroundColor: "#BBB",
              }}
              cursor="pointer"
              justify="center"
              align="center"
              bg="#EEE"
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
              }}
            >
              <Icon as={BsArrowRight} color="#333" fontSize={16} />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDir={size.width < 800 ? "column" : "row"}
          mt="12"
          justify="space-between"
        >
          <Flex
            justify="center"
            align="center"
            flexDir="column"
            bg="#FFF"
            w={size.width < 800 ? "100%" : "33%"}
            boxShadow="rgba(0,0,0,0.1) 0 0 10px"
            borderRadius="10"
            p="10"
          >
            <Icon as={BsChat} color="green" fontSize={40} />
            <Text
              color="#333"
              w="100%"
              textAlign="center"
              fontWeight="bold"
              mt="4"
              fontFamily="Comfortaa"
            >
              Nayara Avila
            </Text>
            <Text
              color="green"
              w="100%"
              mt="2"
              fontSize={12}
              textAlign="left"
              fontFamily="Comfortaa"
            >
              Boa tarde Lucas! Comecei a te acompanhar há pouco, através do Samer. Parabéns pelo conteúdo, em pouco tempo já me abriu muito a cabeça.
            </Text>
          </Flex>
          <Flex
            ml="2"
            justify="center"
            align="center"
            flexDir="column"
            bg="#FFF"
            w={size.width < 800 ? "100%" : "33%"}
            boxShadow="rgba(0,0,0,0.1) 0 0 10px"
            borderRadius="10"
            p="10"
          >
            <Icon as={BsChat} color="green" fontSize={40} />
            <Text
              color="#333"
              w="100%"
              textAlign="center"
              fontWeight="bold"
              mt="4"
              fontFamily="Comfortaa"
            >
              Nayara Avila
            </Text>
            <Text
              color="green"
              w="100%"
              mt="2"
              fontSize={12}
              textAlign="left"
              fontFamily="Comfortaa"
            >
              Boa tarde Lucas! Comecei a te acompanhar há pouco, através do Samer. Parabéns pelo conteúdo, em pouco tempo já me abriu muito a cabeça.
            </Text>
          </Flex>
          <Flex
            ml="2"
            justify="center"
            align="center"
            flexDir="column"
            bg="#FFF"
            w={size.width < 800 ? "100%" : "33%"}
            boxShadow="rgba(0,0,0,0.1) 0 0 10px"
            borderRadius="10"
            p="10"
          >
            <Icon as={BsChat} color="green" fontSize={40} />
            <Text
              color="#333"
              w="100%"
              textAlign="center"
              fontWeight="bold"
              mt="4"
              fontFamily="Comfortaa"
            >
              Nayara Avila
            </Text>
            <Text
              color="green"
              w="100%"
              mt="2"
              fontSize={12}
              textAlign="left"
              fontFamily="Comfortaa"
            >
              Boa tarde Lucas! Comecei a te acompanhar há pouco, através do Samer. Parabéns pelo conteúdo, em pouco tempo já me abriu muito a cabeça.
            </Text>
          </Flex>
        </Flex>
        <Flex mt="12" w="100%" justify="center">
          <Flex
            style={{
              height: 10,
              width: 10,
              borderRadius: 10,
              backgroundColor: "#AAA",
            }}
          />
          <Flex
            ml="2"
            style={{
              height: 10,
              width: 10,
              borderRadius: 10,
              backgroundColor: "#EEE",
            }}
          />
          <Flex
            ml="2"
            style={{
              height: 10,
              width: 10,
              borderRadius: 10,
              backgroundColor: "#EEE",
            }}
          />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" w="100%">
      <Header />
      <Modules />
      <Risks />
      <Solution />
      <Reviews />
      {
        // prova social
        // FAQ
        // modulos
        // instrutor
        // informacoes necessarias grid
        // pricing
        // selos de seguranca/garantia
      }
    </Flex>
  );
}
