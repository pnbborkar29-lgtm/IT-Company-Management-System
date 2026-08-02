import MainLayout from "@/components/layout/MainLayout";
import CompanyForm from "@/components/company/CompanyForm";

export default function AddCompanyPage() {
  return (
    <MainLayout>
      <h1 className="mb-6 text-3xl font-bold">
        Add Company
      </h1>

      <CompanyForm />
    </MainLayout>
  );
}