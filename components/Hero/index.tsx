import React from "react";
import { useWindowSize } from "../../utils/useWindowSize";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

export default function Hero() {
  const size = useWindowSize();

  return (
    <>
      {size.width > 800 ? (
        <Flex>
          <Image
            src="lucas0.jpeg"
            objectFit="cover"
            style={{
              marginLeft: 20,
              height: "85vh",
              width: "50%",
              borderRadius: 15,
            }}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingLeft: 40,
              paddingRight: 40,
              borderRadius: 15,
            }}
          >
            <Flex flexDir="column">
              <Text
                color="#333"
                fontWeight="bold"
                fontFamily="Comfortaa"
                fontSize={22}
                w="80%"
              >
                Aprenda investir com uma das maiores mentes do mercado
                financeiro
              </Text>
              <Flex
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  height: 2,
                  width: "70%",
                  backgroundColor: "#333",
                  borderRadius: 50,
                }}
              />
              <Text color="#333" mt="6">
                Lucas é professor de mercado financeiro e sócio de um dos
                Escritórios de Investimentos do BTG Pactual, maior Banco de
                Investimentos da América Latina e terceiro maior banco privado
                do Brasil.
              </Text>
              <Text color="#333" mt="3">
                O escritório assessora, atualmente, mais de R$500 milhões reais.
              </Text>
              <Text color="#333" mt="3">
                Possui MBA em Investimentos & Private Banking pelo IBMEC-SP e em
                Direito Tributário pelo IBET, com extensão pelo IBDT/USP.
              </Text>
              <Text color="#333" mt="3" w="90%">
                É advogado licenciado (OAB/2011), graduado pela Faculdade de
                Direito da Universidade Mackenzie, em São Paulo.
              </Text>
              <Text color="#333" mt="3">
                É Auditor Fiscal concursado e ex-sócio fundador de um dos
                escritórios da XP Investimentos. É sócio da Masterplan
                Urbanismo, incorporadora que possui projeto com um fundo de
                investimento imobiliário.
              </Text>
              <Text color="#333" mt="3">
                É sócio da Vernace Capital Partners, boutique financeira
                especializada em operações financeiras e soluções de capital
                para o agronegócio e o mercado imobiliário.
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Text
                color="#333"
                fontSize={26}
                fontWeight="bold"
                fontFamily="Didact Gothic"
              >
                Lucas F Fleury
              </Text>
              <Text color="#333" fontSize={18} fontFamily="Didact Gothic">
                Auditor fiscal, founder, banker etc...
              </Text>
            </Flex>
          </Box>
        </Flex>
      ) : (
        <Flex flexDir="column">
          <Image
            objectFit="cover"
            src="lucas0.jpeg"
            style={{
              height: "92vh",
              width: "100%",
            }}
          />
          <Flex
            flexDir="column"
            h="100%"
            w="100%"
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
            position="absolute"
          >
            <Flex flexDir="column" position="absolute" paddingTop="55vh">
              <Text
                color="#FFF"
                fontSize={26}
                fontWeight="bold"
                fontFamily="Didact Gothic"
              >
                Lucas F Fleury
              </Text>
              <Flex
                style={{
                  marginTop: 5,
                  width: 150,
                  height: 2,
                  borderRadius: 10,
                  backgroundColor: "#FFF",
                }}
              />
              <Text color="#FFF" fontSize={18} fontFamily="Didact Gothic">
                Kaza Capital & Vernace Capital
              </Text>
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
            w="100%"
            h="100%"
            style={{ paddingLeft: 20, paddingRight: 20 }}
          >
            <Box
              bg="#FFF"
              boxShadow="rgba(0,0,0,0.1) 0 0 10px"
              style={{
                marginTop: -210,
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20,
                borderRadius: 10,
              }}
            >
              <Text
                color="#333"
                fontWeight="bold"
                fontFamily="Comfortaa"
                fontSize={22}
              >
                Aprenda investir com uma das maiores mentes do mercado
                financeiro
              </Text>
              <Flex
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  height: 2,
                  width: "85%",
                  backgroundColor: "#333",
                  borderRadius: 50,
                }}
              />
              <Text color="#333" mt="4">
                Lucas é professor de mercado financeiro e sócio de um dos
                Escritórios de Investimentos do BTG Pactual, maior Banco de
                Investimentos da América Latina e terceiro maior banco privado
                do Brasil.
              </Text>
              <Text color="#333" mt="3">
                O escritório assessora, atualmente, mais de R$500 milhões reais.
              </Text>
              <Text color="#333" mt="3">
                Possui MBA em Investimentos & Private Banking pelo IBMEC-SP e em
                Direito Tributário pelo IBET, com extensão pelo IBDT/USP.
              </Text>
              <Text color="#333" mt="3" w="90%">
                É advogado licenciado (OAB/2011), graduado pela Faculdade de
                Direito da Universidade Mackenzie, em São Paulo.
              </Text>
              <Text color="#333" mt="3">
                É Auditor Fiscal concursado e ex-sócio fundador de um dos
                escritórios da XP Investimentos. É sócio da Masterplan
                Urbanismo, incorporadora que possui projeto com um fundo de
                investimento imobiliário.
              </Text>
              <Text color="#333" mt="3">
                É sócio da Vernace Capital Partners, boutique financeira
                especializada em operações financeiras e soluções de capital
                para o agronegócio e o mercado imobiliário.
              </Text>
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
}
