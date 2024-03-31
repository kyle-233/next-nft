"use client";
import { NftItemCard } from "@/components/nft-item-card";
import { useEffect } from "react";
// require("dotenv").config();
export function PopularNft({ getOwnerNftsPromise }: any) {
  // const [ownerNfts] = await Promise.all([getOwnerNftsPromise]);
  // console.log("ownerNfts---", ownerNfts);
  const getNfts = async () => {
    const options = {
      method: "GET",
      headers: { accept: "application/json" },
    };
    const response = await fetch(
      `https://eth-sepolia.g.alchemy.com/nft/v3/xxx/getNFTsForOwner?owner=xxx&pageSize=2`,
      options,
    );
  };

  useEffect(() => {
    getNfts();
  }, []);
  return (
    <div className=" pt-[120px] pb-[100px]">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="font-heading text-[64px] mb-20">Latest artworks</h2>
        </div>
        <div className="relative">
          <div className="grid grid-cols-4 items-start gap-8">
            {Object.keys(new Array(8).fill("")).map((item, index) => (
              <div key={index} className="odd:mt-8">
                <NftItemCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
