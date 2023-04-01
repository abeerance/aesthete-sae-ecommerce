import { Heading } from "@chakra-ui/react";

type FooterHeadingProps = {
  title: string;
};

const FooterHeading: React.FC<FooterHeadingProps> = ({ title }) => {
  return (
    <Heading fontSize='lg' mb='15px' fontWeight={700}>
      {title}
    </Heading>
  );
};

export default FooterHeading;
