import { Link, LinkProps } from "@chakra-ui/react";
import { useRouter } from "next/router";

type NavLinkProps = {
  href: string;
  mRight: boolean;
} & LinkProps;

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  mRight,
  ...props
}) => {
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
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
