import { Box, Center, Flex, Icon, Link, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { AestheteLogo } from "./logo/aesthete-logo";
import NavLink from "./navlink/navlink";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      bg='white'
      borderBottom='1px solid'
      borderBottomColor='gray.200'
      py={3}
      position='relative'
      height='70px'
      display='flex'
      justifyContent='space-around'
      alignItems='center'
    >
      <Center ml='40px'>
        <NavLink href='/new-arrivals'>New Arrivals</NavLink>
        <NavLink href='/shoes'>Shoes</NavLink>
        <NavLink href='/apparel'>Apparel & More</NavLink>
        <NavLink href='/accessories'>Accessories</NavLink>
      </Center>
      <Spacer />
      <Center position='absolute'>
        <Link onClick={() => router.push("/")}>
          <AestheteLogo />
        </Link>
      </Center>
      <Spacer />
      <Flex mr='40px'>
        <Center>
          <Icon as={AiOutlineUser} w={34} h={31} ml='12px' cursor='pointer' />
          <Icon as={IoCartOutline} w={34} h={31} ml='12px' cursor='pointer' />
        </Center>
      </Flex>
    </Box>
  );
};

export default Navbar;
