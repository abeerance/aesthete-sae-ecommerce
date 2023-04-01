import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import FooterHeading from "./footer-heading/footer-heading";
import FooterLink from "./footer-link/footer-link";

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
            <FooterHeading title='HELP' />
            <FooterLink title='FAQ' href='/faq' />
            <FooterLink title='Contact Us' href='/contact-us' />
          </GridItem>
          <GridItem>
            <FooterHeading title='SHOP' />
            <FooterLink title='New' href='/new' />
            <FooterLink title='Shoes' href='/shoes' />
            <FooterLink title='Apparel' href='/apparel' />
            <FooterLink title='Accessories' href='/accessories' />
          </GridItem>
          <GridItem>
            <FooterHeading title='COMPANY' />
            <FooterLink title='About' href='/about' />
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
