import Link from "next/link";
import { Icons } from "@/components/icons";
import { ModeToggle } from "./mode-toggle";

export const SiteHeader = () => {
  return (
    <header>
      <div className="absolute top-0 left-0 w-full">
        <div className="container h-[80px] px-5 flex items-center gap-6">
          <Link href="/" className="mr-8">
            {/* <Icons.logo className="" /> */}
            {/* Logo */}
            <h1>Logo</h1>
            <span className="sr-only">VESE NFT</span>
          </Link>
          <div className="flex-1"></div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
