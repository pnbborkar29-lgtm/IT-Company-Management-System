import MainLayout from "@/components/layout/MainLayout";
import DashboardCards from "./DashboardCards";

export default function DashboardPage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <DashboardCards/>
    </MainLayout>
  );
}