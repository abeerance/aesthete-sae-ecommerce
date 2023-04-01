import { Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

type FooterLinkProps = {
  title: string;
  href: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ title, href }) => {
  const router = useRouter();

  return (
    <Link
      display='block'
      fontSize={14}
      mb={2}
      onClick={() => router.push(href)}
    >
      {title}
    </Link>
  );
};

export default FooterLink;
