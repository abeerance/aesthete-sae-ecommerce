// components/Footer.tsx
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FooterLink from "./footerlink/footerlink";

const Footer: React.FC = () => {
  return (
    <Box width='100%' color='#f8f8f8' bg='#212A2F' py='100px'>
      <Box
        py={12}
        px={{ base: 4, md: 16 }}
        maxWidth='1380px'
        padding='0 24px !important'
        margin='0 auto'
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={8}
        >
          <GridItem>
            <Heading fontSize='lg' mb={4} fontWeight={700}>
              HELP
            </Heading>
            <FooterLink title='FAQ' href='/faq' />
            <FooterLink title='Contact Us' href='/contact-us' />
          </GridItem>
          <GridItem>
            <Heading fontSize='lg' mb={4} fontWeight={700}>
              SHOP
            </Heading>
            <FooterLink title='Men' href='/men' />
            <FooterLink title='Women' href='/women' />
          </GridItem>
          <GridItem>
            <Heading fontSize='lg' mb={4} fontWeight={700}>
              COMPANY
            </Heading>
            <FooterLink title='Our Story' href='/about' />
          </GridItem>
          <GridItem />
        </Grid>
        <Flex
          mt={100}
          justifyContent='center'
          alignItems='center'
          flexDirection={{ base: "column", md: "row" }}
        >
          <Center>
            <Text fontSize='sm' textAlign={{ base: "center", md: "left" }}>
              &copy; {new Date().getFullYear()} Aesthete. All rights reserved.
            </Text>
            <Text fontSize='sm' mt={{ base: 2, md: 0 }}>
              Website by Aesthete
            </Text>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
