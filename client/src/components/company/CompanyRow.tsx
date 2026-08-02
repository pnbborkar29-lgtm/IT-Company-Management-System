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
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">{company.companyName}</td>
      <td className="px-4 py-3">{company.companyType}</td>
      <td className="px-4 py-3">{company.employeeCount}</td>
      <td className="px-4 py-3">{company.city}</td>
      <td className="px-4 py-3">{company.status}</td>
      <td>
        <div>
            <button>
                <FaEye/>
            </button>

            <button>
                <FaEdit/>
            </button>

            <button className="text-red-600">
                <FaTrash/>
            </button>
        </div>
      </td>
    </tr>
  );
}
