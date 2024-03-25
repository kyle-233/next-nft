"use client";
import { Button } from "@/components/ui/button";
import { connectWallet, getCurrentWalletConnected } from "@/lib/interact";
import { useEffect, useState } from "react";
import { useToast } from "@/components/providers/use-toast";

export const ConnectWalletBtn = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState<string | Element>("");
  const { toast } = useToast();
  const connectWalletPressed = async () => {
    if (walletAddress.length !== 0) return;
    const { status, address } = await connectWallet();
    setWallet(address);
    setStatus(status as any);
    toast({
      description: status,
    });
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("🦊 Changed wallet account successfully!");
          toast({
            description: "🦊 Changed wallet account successfully!",
          });
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
          toast({
            description: "🦊 Connect to Metamask using the top right button.",
          });
        }
      });
    } else {
      setStatus(
        (
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        ) as any,
      );
    }
  }

  useEffect(() => {
    const getWalletConnect = async () => {
      addWalletListener();
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status as any);
      toast({
        description: status,
      });
    };
    getWalletConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Button
      variant="outline"
      className=" relative z-[1] bg-transparent py-3 px-6 text-base leading-[1.2] tracking-normal border-[2px] rounded-[50px] h-auto hover:border-transparent hover:text-white after:content-[''] after:absolute after:-top-[2px] after:-right-[2px] after:-bottom-[2px] after:-left-[2px] after:rounded-[50px] after:-z-[1] after:transition-all after:duration-300 after:bg-[#741ff5] after:bg-gradient-radial  after:opacity-0 after:hover:opacity-100"
      onClick={connectWalletPressed}
    >
      {walletAddress.length > 0
        ? String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        : "Connect wallet"}
    </Button>
  );
};
