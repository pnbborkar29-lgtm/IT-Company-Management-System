import CompanyForm from "@/components/company/CompanyForm";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditCompanyPage({params}: Props){
    const {id} = await params;

    return(
        <CompanyForm 
             companyId={Number(id)}
             isEdit={true}
            />
    );
}