import "server-only";

import { unstable_cache as cache } from "next/cache";

export async function getOwnerNfts(): Promise<any> {
  try {
    return await cache(
      async () => {
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };
        console.log("process.env.ALCHEMY_API_KEY", process.env.ALCHEMY_API_KEY);
        const response = await fetch(
          `https://eth-sepolia.g.alchemy.com/nft/v3/xxx/getNFTsForOwner?owner=xxx&pageSize=2`,
          options,
        );
        if (!response.ok) {
          return null;
        }
        const data = (await response.json()) as any;

        return process.env.ALCHEMY_API_KEY;
      },
      ["owner-nft"],
      {
        tags: ["owner-nft"],
      },
    );
  } catch (err) {
    console.error(err);
    return null;
  }
}
