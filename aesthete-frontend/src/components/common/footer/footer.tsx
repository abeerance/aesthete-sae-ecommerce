// components/Footer.tsx
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Footer: React.FC = () => {
  const router = useRouter();

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
            <Heading fontSize='lg' mb={4}>
              Shop
            </Heading>
            <Link display='block' mb={2} onClick={() => router.push("/men")}>
              Men
            </Link>
            <Link display='block' mb={2} onClick={() => router.push("/women")}>
              Women
            </Link>
          </GridItem>
          <GridItem>
            <Heading fontSize='lg' mb={4}>
              About
            </Heading>
            <Link display='block' mb={2} onClick={() => router.push("/about")}>
              Our Story
            </Link>
            <Link
              display='block'
              mb={2}
              onClick={() => router.push("/sustainability")}
            >
              Sustainability
            </Link>
          </GridItem>
          <GridItem>
            <Heading fontSize='lg' mb={4}>
              Help
            </Heading>
            <Link display='block' mb={2} onClick={() => router.push("/faq")}>
              FAQ
            </Link>
            <Link
              display='block'
              mb={2}
              onClick={() => router.push("/contact-us")}
            >
              Contact Us
            </Link>
          </GridItem>
          <GridItem>
            <Heading fontSize='lg' mb={4}>
              Legal
            </Heading>
            <Link
              display='block'
              mb={2}
              onClick={() => router.push("/privacy")}
            >
              Privacy Policy
            </Link>
            <Link display='block' mb={2} onClick={() => router.push("/terms")}>
              Terms & Conditions
            </Link>
          </GridItem>
        </Grid>
        <Flex
          mt={12}
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
