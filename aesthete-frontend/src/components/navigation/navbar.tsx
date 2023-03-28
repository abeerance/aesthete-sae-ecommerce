import { Box, Center, Flex, Icon, Link, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { AestheteLogo } from "./logo/aesthete-logo";
import NavLink from "./navlink/navlink";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <header>
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
        <nav>
          <Center ml='40px'>
            <ul
              style={{
                listStyleType: "none",
                margin: 0,
                padding: 0,
                display: "flex",
              }}
            >
              <li>
                <NavLink href='/new-arrivals'>New Arrivals</NavLink>
              </li>
              <li>
                <NavLink href='/shoes'>Shoes</NavLink>
              </li>
              <li>
                <NavLink href='/apparel'>Apparel & More</NavLink>
              </li>
              <li>
                <NavLink href='/accessories'>Accessories</NavLink>
              </li>
            </ul>
          </Center>
        </nav>
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
    </header>
  );
};

export default Navbar;
