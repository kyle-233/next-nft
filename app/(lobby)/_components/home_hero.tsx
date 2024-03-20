import Image from "next/image";

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
                  <h2 className=" text-7xl leading-none font-bold mb-6">
                    Supercharge your NFT Adventure
                  </h2>
                  <p className=" text-2xl leading-normal max-w-[75%] mb-8">
                    Find the right NFT collections to buy within the platform.
                  </p>
                </div>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
