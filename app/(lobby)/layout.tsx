import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

interface LobbyLayoutProps {
  children?: React.ReactNode;
}

const LobbyLayout = ({ children }: LobbyLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default LobbyLayout;
