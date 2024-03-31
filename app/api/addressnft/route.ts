// import { alchemy } from "@/lib/fetchers/alchemy";

// export async function POST(req: Request) {
//   // console.log("req", await req.json());
//   const { address } = await req.json();

//   try {
//     const response = await alchemy.nft.getNftsForOwner(address);
//     // console.log(response);
//     return new Response("data", { status: 200 });
//   } catch (e) {
//     console.log(e);
//     return Response.json({ e }, { status: 200 });
//   }
// }

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
