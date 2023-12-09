import { Avatar, HStack, Text, Box, Flex } from "@chakra-ui/react";
// @ts-ignore
import { Pioneer } from "@pioneer-sdk/pioneer-react";

// @ts-ignore
import PioneerImage from "../assets/png/pioneer.png";

const PROJECT_NAME = "Pioneer Template";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <HStack alignItems="center" spacing={4}>
        <Avatar name="logo" src={PioneerImage} />
        <Text fontSize="3xl">{PROJECT_NAME}</Text>
      </HStack>
      <Box marginLeft="auto" />
      <Pioneer />
    </Flex>
  );
};

export default Header;
