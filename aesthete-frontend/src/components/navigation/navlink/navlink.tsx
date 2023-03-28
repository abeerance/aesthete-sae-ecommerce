import { Link, LinkProps } from "@chakra-ui/react";
import { useRouter } from "next/router";

type NavLinkProps = {
  href: string;
} & LinkProps;

const NavLink: React.FC<NavLinkProps> = ({ href, children, ...props }) => {
  const router = useRouter();

  return (
    <Link
      minH='42px'
      minW='42px'
      mr='18px'
      fontSize='14px'
      display='flex'
      alignItems='center'
      textTransform='uppercase'
      fontWeight={600}
      onClick={() => router.push(href)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
