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
import { usePioneer } from "@pioneer-sdk/pioneer-react";
import { useState, useEffect } from "react";

const Basic = () => {
  const { state } = usePioneer();
  const { context, assetContext, blockchainContext, pubkeyContext } = state;
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (pubkeyContext)
      setAddress(
        pubkeyContext?.master || pubkeyContext?.pubkey || pubkeyContext
      );
  }, [pubkeyContext]);

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
              <Td>{assetContext?.asset?.name}</Td>
            </Tr>
            <Tr>
              <Td>Blockchain Context</Td>
              <Td>{blockchainContext?.name}</Td>
            </Tr>
            <Tr>
              <Td>Address for context</Td>
              <Td>{address}</Td>
            </Tr>
            <Tr>
              <Td>Outbound asset context</Td>
              <Td>{address}</Td>{" "}
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
