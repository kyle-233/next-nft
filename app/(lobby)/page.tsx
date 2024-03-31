import * as React from "react";
import { HomeHero } from "./_components/home-hero";
import { Powered } from "./_components/powered";
import { DivideBar } from "./_components/divide-bar";
import { MintSection } from "./_components/mint-section";
import { PopularNft } from "./_components/popular-nft";
import { getOwnerNfts } from "@/lib/fetchers/alchemy";
const IndexPage = async () => {
  // const getOwnerNftsPromise = getOwnerNfts();
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <HomeHero />
      <Powered />
      <DivideBar />
      <MintSection />
      <DivideBar />
      <PopularNft {...{}} />
    </React.Suspense>
  );
};

export default IndexPage;
