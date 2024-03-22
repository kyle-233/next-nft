import Image from "next/image";

export const DivideBar = () => {
  return (
    <div>
      <div className="container flex justify-center">
        <Image
          src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/divider-01.svg"
          alt=""
          width={80}
          height={19}
        />
      </div>
    </div>
  );
};
