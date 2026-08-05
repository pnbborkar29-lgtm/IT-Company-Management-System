import CompanyDetails from "@/components/company/CompanyDetails";

interface CompanyPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function CompanyPage({
    params,
}: CompanyPageProps) {
    const {id} = await params;

    return <CompanyDetails id={Number(id)} />;
}