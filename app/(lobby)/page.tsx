import * as React from "react";
import { ModeToggle } from "@/components/layout/mode-toggle";
const IndexPage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ModeToggle />
    </React.Suspense>
  );
};

export default IndexPage;
