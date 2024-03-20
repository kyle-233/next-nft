import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const MainNav = () => {
  return (
    <ul className="flex-1 flex gap-4 items-center">
      {siteConfig.mainNav.map((item) => (
        <li key={item.title} className="px-4 py-2 font-bold text-xl">
          <Link href={item.href} target={item.external ? "_blank" : undefined}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
