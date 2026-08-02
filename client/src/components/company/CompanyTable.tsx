"use client"

import { useEffect, useState } from "react";
import CompanyRow from "./CompanyRow";
import { Company } from "@/types/company";
import { companyService } from "@/services/company.service";

export default function CompanyTable() {

  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchCompanies();
  },[]);

  const fetchCompanies = async () =>{
    try {
      const response = await companyService.getCompanies();
      setCompanies(response.data);
    } catch(error){
      console.error("Failed to fetch companies", error)
    } finally {
      setLoading(false)
    }
  };
  if (loading) {
    return <p>Loading Companies...</p>;
  }
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
