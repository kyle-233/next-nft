import { NftItemCard } from "@/components/nft-item-card";

export const PopularNft = () => {
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
};
