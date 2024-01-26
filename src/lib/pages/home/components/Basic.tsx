import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
// @ts-ignore
import { usePioneer } from "@pioneer-sdk/pioneer-react";
import { useState, useEffect } from "react";

const Basic = () => {
  const { state } = usePioneer();
  const { context, assetContext, pubkeyContext } = state;
  const [address, setAddress] = useState("");
  const [selectedAsset, setAsset] = useState("");
  const [selectedBlockchain, setBlockchain] = useState("");

  useEffect(() => {
    if (pubkeyContext)
      setAddress(
        pubkeyContext?.master || pubkeyContext?.pubkey || pubkeyContext
      );
  }, [pubkeyContext]);

  useEffect(() => {
    setAsset(assetContext?.name);
    setBlockchain(assetContext?.chain);
    setAddress(assetContext?.address);
  }, [assetContext]);

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Context</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Wallet Context</Td>
              <Td>{context}</Td>
            </Tr>
            <Tr>
              <Td>Asset Context</Td>
              <Td>{selectedAsset}</Td>
            </Tr>
            <Tr>
              <Td>Blockchain Context</Td>
              <Td>{selectedBlockchain}</Td>
            </Tr>
            <Tr>
              <Td>Address for context</Td>
              <Td>{address}</Td>
            </Tr>
            <Tr>
              <Td>Outbound asset context</Td>
              <Td>{address}</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Context</Th>
              <Th>Value</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Basic;
