import { SiteFooter } from "@/components/layout/site-footer";

interface LobbyLayoutProps {
  children?: React.ReactNode;
}

const LobbyLayout = ({ children }: LobbyLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default LobbyLayout;
