import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100">
        <Header />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}