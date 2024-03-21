import * as React from "react";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { HomeHero } from "./_components/home_hero";
import { Powered } from "./_components/powered";
const IndexPage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <HomeHero />
      <Powered />
    </React.Suspense>
  );
};

export default IndexPage;
