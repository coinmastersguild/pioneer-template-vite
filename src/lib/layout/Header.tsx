// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Card,
  Button,
  Box,
  Flex,
  HStack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { usePioneer } from "@pioneer-sdk/pioneer-react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const PROJECT_NAME = "Swaps.PRO";
// eslint-disable-next-line no-console
const HeaderNew = () => {
  const { state, connectWallet } = usePioneer();
  const [isOpen, setIsOpen] = useState(false);

  const {
    // api,
    app,
    // context,
    // assetContext,
    // blockchainContext,
    // pubkeyContext,
    // modals,
  } = state;

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
      borderColor="gray.200" // set border color
    >
      {app && app.wallets && (
        <Drawer isOpen={isOpen} placement="right" onClose={handleClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Wallets</DrawerHeader>
              <DrawerBody>
                {app.wallets.map((wallet: any) => (
                  <Card key={wallet.type}>
                    <Box
                      key={wallet.type}
                      p={4}
                      boxShadow="md"
                      borderRadius="md"
                      maxW="sm"
                      w="full"
                      mt={4}
                      onClick={() => connectWallet(wallet.type)}
                    >
                      <HStack spacing={4}>
                        <Avatar src={wallet.icon} name={wallet.type} />
                        <VStack alignItems="start" spacing={1}>
                          <Text fontWeight="bold">{wallet.type}</Text>

                          <HStack spacing={2}>
                            <Badge
                              colorScheme={
                                wallet.status === "offline" ? "red" : "green"
                              }
                            >
                              {wallet.status.toUpperCase()}
                            </Badge>

                            <Badge
                              colorScheme={wallet.isConnected ? "green" : "red"}
                            >
                              {wallet.isConnected
                                ? "CONNECTED"
                                : "DISCONNECTED"}
                            </Badge>
                          </HStack>
                        </VStack>
                      </HStack>
                    </Box>
                  </Card>
                ))}
              </DrawerBody>
              <DrawerFooter>{/* Any footer content if needed */}</DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
      <HStack spacing={8}>
        <RouterLink to="/">
          <Box>
            <Text fontSize="3xl">{PROJECT_NAME}</Text>
          </Box>
        </RouterLink>
      </HStack>
      <br />
      <Button onClick={handleOpen}>Connect</Button>
      {/* <Pioneer /> */}
    </Flex>
  );
};

export default HeaderNew;
