import { Icons } from "@/components/icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export const HomeHero = () => {
  return (
    <div className="w-full">
      <div className=" absolute top-0 left-0 w-full h-screen -z-[1] mix-blend-overlay">
        <Image
          className=" fixed -left-[4%] -top-[4%] blur-[80px]"
          src={
            "https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/others/gradient-circle.svg"
          }
          width={500}
          height={500}
          alt={"Background Circle"}
        />
        <Image
          className=" fixed -right-[4%] -bottom-[4%] blur-[80px]"
          src={
            "https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/others/gradient-circle.svg"
          }
          width={500}
          height={500}
          alt="Background Circle"
        />
      </div>
      <div className="w-full">
        <div className="relative pt-[215px] pb-[100px]">
          <div className="absolute top-0 left-0 w-full min-h-screen -z-[1]">
            <div className="bg-hero-pattern absolute bg-center bg-no-repeat bg-cover top-0 right-0 bottom-0 left-0 opacity-10"></div>
          </div>
          <div className="container z-[3]">
            <div className="flex">
              <div className="flex-1">
                <div className="relative">
                  <Image
                    src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/ethereum-01.png"
                    alt=""
                    width={44}
                    height={44}
                    className="absolute -z-[1] -top-[25%] left-[38%]"
                  />
                  <Image
                    src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-03.png"
                    alt=""
                    width={24}
                    height={26}
                    className="absolute -z-[1] -bottom-[16%] left-[12%]"
                  />
                  <Image
                    src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-03.png"
                    alt=""
                    width={24}
                    height={26}
                    className="absolute -z-[1] top-[14%] -left-[12%]"
                  />
                  <h2 className=" text-7xl leading-none font-bold mb-6 font-heading">
                    Supercharge your NFT Adventure
                  </h2>
                  <p className=" text-2xl leading-normal max-w-[75%] mb-8">
                    Find the right NFT collections to buy within the platform.
                  </p>
                  <Link
                    href={"/"}
                    target="_blank"
                    rel="nofollow"
                    className="relative overflow-hidden rounded-[50px] z-[1] bg-transparent hover:after:opacity-85 hover:bg-[#e348ff] flex items-center py-[14px] px-6 w-fit after:content-[''] after:absolute after:rounded-[50px] after:top-0 after:left-0 after:w-full after:h-full after:-z-[1] after:bg-[#741ff5] after:bg-gradient-radial after:transition-all after:duration-300 after:ease-in-out"
                  >
                    <span className="text-base font-blod text-white tracking-normal leading-tight">
                      View in OPENSEA
                    </span>
                    {/* <i className="font-unicon text-2xl leading-none ml-2 font-bold before:content-['\e90d']"></i> */}
                    <Icons.more className="size-6 text-white ml-2 font-bold" />
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="ml-6 z-[1] relative">
                  <Icons.hero className="absolute -top-[17%] opacity-30 -z-[1] align-middle" />
                  <Image
                    src="https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/others/blob-dashed-light.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="hidden dark:block absolute -top-[10%] right-0 opacity-10 -z-[1] fill-transparent"
                  />
                  <Image
                    src="https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/others/blob-dashed.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="block dark:hidden absolute -top-[10%] right-0 opacity-10 -z-[1] fill-transparent"
                  />
                  <Image
                    src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/bitcoin-01.png"
                    alt=""
                    width={44}
                    height={44}
                    className="absolute -z-[1] top-[67%] -left-[21%]"
                  />
                  <Image
                    src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/x.png"
                    alt=""
                    width={28}
                    height={28}
                    className="absolute -z-[1] -top-[4%] right-[16%]"
                  />
                  <div className="flex gap-4">
                    <div className="flex-1 relative">
                      <AspectRatio ratio={3 / 4}>
                        <Image
                          src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_09.jpg"
                          alt=""
                          width={600}
                          height={800}
                          decoding="async"
                          className="rounded-3xl"
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex-1 relative mt-12">
                      <AspectRatio ratio={3 / 4}>
                        <Image
                          src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_06.jpg"
                          alt=""
                          width={600}
                          height={800}
                          decoding="async"
                          className="w-full max-w-full h-auto border-none aspect-[3/4] rounded-3xl"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <Link
                    href="/"
                    className="absolute left-0 top-2/4 -translate-x-[70%] -translate-y-[61%] rounded-full bg-white dark:bg-[#241f2b] before:content-[''] before:border before:border-[#8383832d] before:absolute before:top-0 before:left-0 before:block before:w-[78px] before:h-[78px] before:rounded-full before:translate-x-[20px] before:translate-y-[20px]"
                  >
                    <Icons.view className=" fill-[#e348ff] max-w-[148px] h-auto right-[10%] inline-flex uppercase origin-center animate-spin" />
                    <Icons.arrowTopRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 font-bold text-[#e348ff]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
