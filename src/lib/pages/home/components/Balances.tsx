import {
  Spinner,
  Stack,
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  Box,
  StackDivider,
} from "@chakra-ui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { usePioneer } from "@pioneer-sdk/pioneer-react";
// import { useState, useEffect } from "react";

const Balances = () => {
  const { state } = usePioneer();
  const { balances } = state;

  if (balances.length === 0) {
    return <Spinner />;
  }
  return (
    <Stack spacing={4}>
      {balances.map((balance: any, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Card key={index}>
          <CardHeader>
            <Heading size="md">{balance.asset.name}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Chain
                </Heading>
                <Text pt="2" fontSize="sm">
                  {balance.asset.chain}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Amount
                </Heading>
                <Text pt="2" fontSize="sm">
                  {balance.assetAmount.toString()}
                </Text>
              </Box>
              {/* Add more details from the balance object as needed */}
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
};

export default Balances;
