import type { MainNavItem } from "@/types";

export const siteConfig = {
  mainNav: [
    {
      title: "Minting",
      href: "/minting",
      external: false,
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "About Us",
      items: [
        {
          title: "About",
          href: "https://onestopshop.jackblatch.com",
          external: true,
        },
        {
          title: "Terms of Service",
          href: "https://acme-corp.jumr.dev",
          external: true,
        },
      ],
    },
    {
      title: "Get In Touch",
      items: [
        {
          title: "For NFT Projects",
          href: "/about",
          external: false,
        },
        {
          title: "For KOLs",
          href: "/contact",
          external: false,
        },
      ],
    },
  ],
};
