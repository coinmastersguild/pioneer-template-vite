import {
  Button,
  Grid,
  Heading,
  Text,
  Input,
  Spinner,
  VStack,
  FormControl,
  FormLabel,
  useToast,
  Avatar,
} from "@chakra-ui/react";
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import { COIN_MAP_LONG } from "@pioneer-platform/pioneer-coins";
import {
  Amount,
  AmountType,
  AssetAmount,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from "@pioneer-platform/swapkit-entities";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Chain } from "@pioneer-platform/types";
import { usePioneer } from "@pioneer-sdk/pioneer-react";
import { useState, useCallback } from "react";

const Transfer = ({ openModal }: any) => {
  const toast = useToast();
  const { state } = usePioneer();
  const { app, assetContext, balances } = state;

  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [modalType, setModalType] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [sendAmount, setSendAmount] = useState<Amount | undefined>();
  const [recipient, setRecipient] = useState("");

  const handleInputChange = (value: string) => {
    setInputAmount(value);
    if (!assetContext) return;
    const float = parseFloat(value);
    const amount = new Amount(
      float,
      AmountType.ASSET_AMOUNT,
      assetContext.asset.decimal
    );
    setSendAmount(amount);
  };

  const handleSend = useCallback(async () => {
    if (!assetContext || !inputAmount || !app || !app.swapKit || !sendAmount)
      return;
    setIsSubmitting(true);
    const assetAmount = new AssetAmount(assetContext.asset, sendAmount);

    if (!recipient) {
      toast({
        title: "Error",
        description: "Must select a recipient",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const txHash = await app.swapKit.transfer({
        assetAmount,
        memo: "",
        recipient,
      });
      window.open(
        `${app.swapKit.getExplorerTxUrl(Chain.THORChain, txHash as string)}`,
        "_blank"
      );
    } catch (e: any) {
      console.error(e);
      toast({
        title: "Error",
        description: e.toString(),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [assetContext, inputAmount, app, recipient, sendAmount, toast]);

  return (
    <VStack spacing={5} align="start" p={6} borderRadius="md">
      <Heading as="h1" size="lg">
        Send Crypto!
      </Heading>
      <Avatar
        size="xl"
        src={`https://pioneers.dev/coins/${
          COIN_MAP_LONG[assetContext?.asset?.network]
        }.png`}
      />
      <Text>Asset: {assetContext?.asset?.name || "N/A"}</Text>
      <Text>Chain: {assetContext?.asset?.chain || "N/A"}</Text>
      <Text>Symbol: {assetContext?.asset?.symbol || "N/A"}</Text>
      <Button onClick={() => openModal("Select Asset")} isDisabled={!balances}>
        Select Asset
      </Button>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <FormControl>
          <FormLabel>Recipient:</FormLabel>
          <Input
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Address"
            value={recipient}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Input Amount:</FormLabel>
          <Input
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="0.0"
            value={inputAmount}
          />
        </FormControl>
      </Grid>
      <Text>
        Available Balance: {assetContext?.assetAmount?.toString() || "N/A"} (
        {assetContext?.asset?.symbol || "N/A"})
      </Text>
      <Button mt={4} isLoading={isSubmitting} onClick={handleSend} w="full">
        {isSubmitting ? <Spinner size="xs" /> : "Send"}
      </Button>
    </VStack>
  );
};

export default Transfer;
