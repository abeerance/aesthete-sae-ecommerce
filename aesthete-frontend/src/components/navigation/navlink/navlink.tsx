import { Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

type NavLinkProps = {
  title: string;
  href: string;
  mRight: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ title, href, mRight }) => {
  const router = useRouter();

  return (
    <Link
      minH='42px'
      minW='42px'
      margin={`${mRight === true ? "0 18px 0 0" : "0 0 0 18px"}`}
      fontSize='14px'
      display='flex'
      alignItems='center'
      textTransform='uppercase'
      fontWeight={600}
      onClick={() => router.push(href)}
    >
      {title}
    </Link>
  );
};

export default NavLink;
