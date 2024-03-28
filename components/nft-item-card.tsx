import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

export const NftItemCard = () => {
  return (
    <div className="group dark:bg-[#ffffff0d] p-5 rounded-[20px] duration-500 transition-all hover:-translate-y-[10px]">
      <div className="relative mb-5 rounded-[20px] overflow-hidden">
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://themesflat.co/html/axiesv/assets/images/box-item/card-item-4.jpg"
            alt=""
            fill={true}
            className="duration-500 group-hover:scale-105 object-cover"
          />
        </AspectRatio>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h5 className="max-w-[75%] overflow-hidden whitespace-nowrap text-ellipsis">
            The RenaiXance Rising the sun
          </h5>
          <div className="w-[49px] h-6 leading-6 text-center font-bold text-xs text-[white] bg-[#5142FC] rounded-[10px] tracking-widest uppercase">
            bsc
          </div>
        </div>
        <div className="flex justify-between items-center mb-1">
          <div className="flex justify-between items-center">
            <div className="w-[44px] h-[44px] rounded-2xl overflow-hidden mr-3 shrink-0">
              <Image
                src="https://themesflat.co/html/axiesv/assets/images/avatar/avt-1.jpg"
                alt=""
                width={44}
                height={44}
                className="max-w-full align-middle"
              />
            </div>
            <div>
              <span className="text-[13px] leading-[21px]">Owned By</span>
              <h6 className="text-base leading-[22px] font-bold">
                <Link href={""} className=" tracking-wide">
                  SalvadorDali
                </Link>
              </h6>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[13px] leading-[21px]">Current Bid</span>
            <h5 className="text-[18px] mt-[6px] font-bold">4.89 ETH</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
