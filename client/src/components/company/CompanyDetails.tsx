"use client";

import { useEffect, useState } from "react";
import { companyService } from "@/services/company.service";

interface Props {
  id: number;
}

export default function CompanyDetails({ id }: Props) {
  const [company, setCompany] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    try {
      const response = await companyService.getCompanyById(id);
      setCompany(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-lg">
        Loading...
      </div>
    );
  }

  if (!company) {
    return (
      <div className="p-8 text-center text-red-500">
        Company Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-8">

      <h1 className="text-3xl font-bold mb-8 border-b pb-4">
        {company.companyName}
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="font-semibold">Company Type</p>
          <p>{company.companyType}</p>
        </div>

        <div>
          <p className="font-semibold">Industry</p>
          <p>{company.industry}</p>
        </div>

        <div>
          <p className="font-semibold">Employees</p>
          <p>{company.employeeCount}</p>
        </div>

        <div>
          <p className="font-semibold">Founded Year</p>
          <p>{company.foundedYear}</p>
        </div>

        <div>
          <p className="font-semibold">CEO</p>
          <p>{company.ceoName}</p>
        </div>

        <div>
          <p className="font-semibold">Status</p>
          <span
            className={`px-3 py-1 rounded text-white ${
              company.status === "Active"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {company.status}
          </span>
        </div>

        <div>
          <p className="font-semibold">Email</p>
          <p>{company.email}</p>
        </div>

        <div>
          <p className="font-semibold">HR Email</p>
          <p>{company.hrEmail}</p>
        </div>

        <div>
          <p className="font-semibold">Phone</p>
          <p>{company.phone}</p>
        </div>

        <div>
          <p className="font-semibold">Website</p>
          <a
            href={company.website}
            target="_blank"
            className="text-blue-600 underline"
          >
            {company.website}
          </a>
        </div>

      </div>

      <div className="mt-8">

        <p className="font-semibold">Address</p>

        <p>
          {company.address}, {company.city}, {company.state} - {company.pincode}
        </p>

      </div>

      <div className="mt-8">

        <p className="font-semibold">Description</p>

        <p>{company.description}</p>

      </div>

    </div>
  );
}