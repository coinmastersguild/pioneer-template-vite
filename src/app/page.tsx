import Image from "next/image";
// import { Pioneer } from "@pioneer-sdk/pioneer-react";
import { ColorModeToggle } from "@/components/ColorModeToggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-row items-center justify-center w-full">
          <h1 className=" text-lg">*Your Project Name Here*</h1>
        </div>
        <div className="flex flex-row-reverse">
          <ColorModeToggle />
        </div>
      </div>
      {/* <Pioneer /> */}
    </main>
  );
}
