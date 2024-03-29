import * as React from "react";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { HomeHero } from "./_components/home-hero";
import { Powered } from "./_components/powered";
import { DivideBar } from "./_components/divide-bar";
import { MintSection } from "./_components/mint-section";
import { NftItemCard } from "@/components/nft-item-card";
import { PopularNft } from "./_components/popular-nft";
const IndexPage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <HomeHero />
      <Powered />
      <DivideBar />
      <MintSection />
      <DivideBar />
      <PopularNft />
    </React.Suspense>
  );
};

export default IndexPage;
