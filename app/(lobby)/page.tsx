import * as React from "react";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { HomeHero } from "./_components/home_hero";
const IndexPage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <HomeHero />
    </React.Suspense>
  );
};

export default IndexPage;
