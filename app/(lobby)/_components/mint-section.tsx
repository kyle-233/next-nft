import Image from "next/image";

export const MintSection = () => {
  return (
    <div className=" pt-[120px] pb-[100px]">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="font-heading text-[64px] mb-20">How to mint</h2>
        </div>
        <div className="relative mx-[100px]">
          <div className="flex flex-wrap">
            <div className="base-auto grow-0 shrink-0 w-1/2 px-4">
              <div className=" py-12 px-[25px] rounded-3xl mb-8 bg-white flex shadow-cardxl">
                <div className=" relative max-w-[72px] mr-[45px]">
                  <Image
                    src={
                      "	https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-01.png"
                    }
                    alt=""
                    decoding="async"
                    width={188}
                    height={247}
                  />
                </div>
                <div>
                  <h2 className=" text-[28px] leading-[1.1] mb-5 font-bold font-heading">
                    Connect your wallet
                  </h2>
                  <p className="text-[#7b7583] text-[18px]">
                    Use Trust Wallet, Metamask or any wallet to connect to the
                    app.
                  </p>
                </div>
              </div>
            </div>
            <div className="base-auto grow-0 shrink-0 w-1/2 px-4">
              <div className=" py-12 px-[25px] rounded-3xl mb-8 bg-white flex shadow-cardxl">
                <div className=" relative max-w-[72px] mr-[45px]">
                  <Image
                    src={
                      "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-02.png"
                    }
                    alt=""
                    decoding="async"
                    width={233}
                    height={264}
                  />
                </div>
                <div>
                  <h2 className=" text-[28px] leading-[1.1] mb-5 font-bold font-heading">
                    Select your quantity
                  </h2>
                  <p className="text-[#7b7583] text-[18px]">
                    Use Trust Wallet, Metamask or any wallet to connect to the
                    app.
                  </p>
                </div>
              </div>
            </div>
            <div className="base-auto grow-0 shrink-0 w-1/2 px-4">
              <div className=" py-12 px-[25px] rounded-3xl mb-8 bg-white flex shadow-cardxl">
                <div className=" relative max-w-[72px] mr-[45px]">
                  <Image
                    src={
                      "	https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-03.png"
                    }
                    alt=""
                    decoding="async"
                    width={174}
                    height={213}
                  />
                </div>
                <div>
                  <h2 className=" text-[28px] leading-[1.1] mb-5 font-bold font-heading">
                    Confirm transaction
                  </h2>
                  <p className="text-[#7b7583] text-[18px]">
                    Earn ETH and BIT for all your NFTs that you sell on our
                    marketplace.
                  </p>
                </div>
              </div>
            </div>
            <div className="base-auto grow-0 shrink-0 w-1/2 px-4">
              <div className=" py-12 px-[25px] rounded-3xl mb-8 bg-white flex shadow-cardxl">
                <div className=" relative max-w-[72px] mr-[45px]">
                  <Image
                    src={
                      "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-04.png"
                    }
                    alt=""
                    decoding="async"
                    width={256}
                    height={232}
                  />
                </div>
                <div>
                  <h2 className=" text-[28px] leading-[1.1] mb-5 font-bold font-heading">
                    Receive your NFTs
                  </h2>
                  <p className="text-[#7b7583] text-[18px]">
                    Latin professor at Hampden-Sydney College in Virginia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
