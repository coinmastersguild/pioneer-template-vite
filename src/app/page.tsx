import Image from "next/image";
// import { Pioneer } from "@pioneer-sdk/pioneer-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <TopBar />
      <div className="flex flex-row items-center justify-center w-[75%]">
        <Table>
          <TableCaption>Connected address: </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Context</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Wallet Context</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Asset Context</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Blockchain Context</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Address for context</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Outbound asset context</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {/* <Pioneer /> */}
    </main>
  );
}
