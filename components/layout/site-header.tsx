import Link from "next/link";
import { Icons } from "@/components/icons";
import { ModeToggle } from "./mode-toggle";
import { MainNav } from "@/components/layout/main-nav";
import { ConnectWalletBtn } from "@/components/connect-wallet-btn";

export const SiteHeader = () => {
  return (
    <header>
      <div className="absolute top-0 left-0 w-full z-[8]">
        <div className="container h-[80px] px-5 flex items-center gap-6">
          <Link href="/" className="mr-16">
            {/* <Icons.logo className="" /> */}
            {/* Logo */}
            <h1>Logo</h1>
            <span className="sr-only">VESE NFT</span>
          </Link>
          <MainNav />
          <ModeToggle />
          <ConnectWalletBtn />
        </div>
      </div>
    </header>
  );
};
