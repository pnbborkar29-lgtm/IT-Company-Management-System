"use client";


import { useRouter } from "next/navigation";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

interface CompanyRowProps {
  company: {
    id: number;
    companyName: string;
    companyType: string;
    employeeCount: number;
    city: string;
    status: string;
  };
}

export default function CompanyRow({ company }: CompanyRowProps) {

  const router = useRouter();
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">{company.companyName}</td>
      <td className="px-4 py-3">{company.companyType}</td>
      <td className="px-4 py-3">{company.employeeCount}</td>
      <td className="px-4 py-3">{company.city}</td>
      <td className="px-4 py-3">
        <span
          className={`rounded px-2 py-1 text-sm ${
            company.status === "Active"
              ? "bg-green-100 gext-green-700"
              : "bg-red-100 text-red-100"
          }`}
        >
          {company.status}
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="flex justify-center gap-3">
          <button 
          onClick={() => router.push(`/companies/${company.id}`)}
          title="view" className="text-blue-600 hover:text-blue-800">
            <FaEye />
          </button>

          <button
           onClick={()=> router.push(`/companies/edit/${company.id}`)}
            className="text-green-600 hover:text-green-800"
            title="Edit Company"
            >
              
            <FaEdit />
          </button>

          <button title="Delete" className="text-red-600 hover:text-red-800">
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}
