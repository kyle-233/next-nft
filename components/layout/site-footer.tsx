import Link from "next/link";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";

export const SiteFooter = () => {
  return (
    <footer className="w-full">
      <div className="container flex flex-row min-h-72 py-10 justify-between">
        <div className="flex mr-72">
          <Link href="/">
            {/* <Icons.logo /> */}
            <h1>Logo</h1>
            <span className="sr-only">VESE NFT</span>
          </Link>
        </div>
        <div className="flex-1 grid grid-cols-4 gap-14">
          {siteConfig.footerNav.map((item) => (
            <dl className="flex flex-col gap-6" key={item.title}>
              <dt className="flex font-bold text-lg">{item.title}</dt>
              {item.items.map((link) => (
                <dd key={link.title}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="flex text-sm tracking-wider font-light"
                  >
                    {link.title}
                  </Link>
                </dd>
              ))}
            </dl>
          ))}
        </div>
      </div>
      <div className="flex mx-16 border-t-[.5px] h-24 justify-center items-center text-lg">
        Built by Kyle
      </div>
    </footer>
  );
};
