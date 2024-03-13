'use client';
import Image from "next/image";
// import { Pioneer } from "@pioneer-sdk/pioneer-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TopBar } from "@/components/layout/TopBar";
import { usePioneer } from '@coinmasters/pioneer-react';
import { useEffect } from 'react';
import { availableChainsByWallet, WalletOption } from '@coinmasters/types';

export default function Home() {
  const { onStart, connectWallet } = usePioneer();

  let onStartApp = async function(){
    try{
      let walletsVerbose = []
      const { keepkeyWallet } = await import("@coinmasters/wallet-keepkey");
      console.log('keepkeyWallet: ', keepkeyWallet);

      const pioneerSetup: any = {
        appName: "Pioneer Template",
        appIcon: "https://pioneers.dev/coins/pioneerMan.png",
      };
      const walletKeepKey = {
        type: WalletOption.KEEPKEY,
        icon: "https://pioneers.dev/coins/keepkey.png",
        chains: availableChainsByWallet[WalletOption.KEEPKEY],
        wallet: keepkeyWallet,
        status: "offline",
        isConnected: false,
      };
      console.log('walletKeepKey: ', walletKeepKey);
      walletsVerbose.push(walletKeepKey);
      console.log('walletsVerbose: ', walletsVerbose);
      onStart(walletsVerbose, pioneerSetup);


      let result = await connectWallet(WalletOption.KEEPKEY);
    }catch(e){
      console.error("Failed to start app!")
    }
  }
  useEffect(() => {
    onStartApp();
  }, []);
  
  return (
    <main className="flex flex-col items-center justify-center p-24">
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
