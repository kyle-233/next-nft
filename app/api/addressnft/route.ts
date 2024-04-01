// import { alchemy } from "@/lib/fetchers/alchemy";
import { Network, Alchemy } from "alchemy-sdk";
// export const runtime = "edge"; // 'nodejs' is the default

export async function POST(request: Request) {
  //   console.log("req", await req.json());
  //   const res = await request.json();
  return Response.json({ a: "1" }, { status: 200 });
  //   const { address } = await req.json();
  return new Response("data", { status: 200 });
  //   try {
  //     const settings = {
  //       apiKey: "demo", // Replace with your Alchemy API Key.
  //       network: Network.ETH_SEPOLIA, // Replace with your network.
  //     };
  //     const alchemy = new Alchemy(settings);
  //     const response = await alchemy.nft.getNftsForOwner(
  //       "xxx",
  //     );
  //     // console.log(response);
  //     return Response.json({ response }, { status: 200 });
  //   } catch (e) {
  //     console.log(e);
  //     return Response.json({ e }, { status: 200 });
  //   }
}

// // import type { NextApiRequest, NextApiResponse } from "next";

// // type ResponseData = {
// //   message: string;
// // };

// // export default function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse<ResponseData>,
// // ) {
// //   res.status(200).json({ message: "Hello from Next.js!" });
// // }
