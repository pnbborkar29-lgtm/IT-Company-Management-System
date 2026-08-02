import CompanyRow from "./CompanyRow";

const companies: any[] = [];

export default function CompanyTable() {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="w-full">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Company</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-left">Employees</th>
            <th className="px-4 py-3 text-left">City</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {companies.length === 0 ? (
            <tr>
              <td colSpan={6} className="py-10 text-center text-gray-500">
                No Companies Found.
              </td>
            </tr>
          ) : (
            companies.map((company) => (
              <CompanyRow key={company.id} company={company} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
