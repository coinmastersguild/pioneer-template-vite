// @ts-ignore
import { usePioneer } from "@pioneer-sdk/pioneer-react";
import { useEffect } from "react";

import Basic from "./components/Basic";
import { initWallets } from "./setup";

const Home = () => {
  const { onStart } = usePioneer();

  // start the context provider
  useEffect(() => {
    initWallets(onStart);
  }, []);

  return (
    <div>
      <Basic />
    </div>
  );
};

export default Home;
