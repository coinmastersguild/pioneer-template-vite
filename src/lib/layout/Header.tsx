// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// import { Pioneer }  from "@pioneer-sdk/pioneer-react";

const PROJECT_NAME = "*Your Project name here*";
// eslint-disable-next-line no-console
const HeaderNew = () => {
  return (
    <Flex
      as="header"
      width="full"
      alignSelf="flex-start"
      gridGap={2}
      justifyContent="space-between"
      alignItems="center"
      p={5}
      bg="gray.900" // change background color
      borderBottom="1px solid" // add a border at the bottom
      borderColor="gray.200" // set border color
    >
      <HStack spacing={8}>
        <RouterLink to="/">
          <Box>
            <Text fontSize="3xl">{PROJECT_NAME}</Text>
          </Box>
        </RouterLink>
      </HStack>
      <br />
      {/* <Pioneer /> */}
    </Flex>
  );
};

export default HeaderNew;
