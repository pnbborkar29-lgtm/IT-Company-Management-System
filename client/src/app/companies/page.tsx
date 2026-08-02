import AddCompanyButton from "@/components/company/AddCompanyButton";
import CompanyTable from "@/components/company/CompanyTable";
import MainLayout from "@/components/layout/MainLayout";

export default function CampaniesPage() {

    return (
        <MainLayout>
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-3xl font-bold">
                    Companies
                </h1>
                <AddCompanyButton/>
            </div>
            <CompanyTable/>
        </MainLayout>
    )
}