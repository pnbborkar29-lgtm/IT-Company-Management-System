"use client";

import { companyService } from "@/services/company.service";
import type { CreateCompanyInput } from "@/types/company";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CompanyFormProps {
  companyId?: number;
  isEdit?: boolean;
}

export default function CompanyForm({
  companyId,
  isEdit = false,
}: CompanyFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<CreateCompanyInput>({
    companyName: "",
    companyType: "Service",
    industry: "",
    employeeCount: 0,
    foundedYear: new Date().getFullYear(),
    website: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    description: "",
    ceoName: "",
    hrEmail: "",
    status: "Active",
  });

  useEffect(() => {
    if (isEdit && companyId) {
      fetchCompany();
    }
  }, [companyId, isEdit]);

  const fetchCompany = async () => {
    try {
      const response = await companyService.getCompanyById(companyId!);

      setFormData(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch company");
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await companyService.updateCompany(companyId!, formData);
        alert("Company Updated Successfully");
      } else {
        await companyService.createCompany(formData);

        alert("Company Added Successfully");
      }

      router.push("/companies");
    } catch (error) {
      console.error(error);

      alert(isEdit ? "Failed to Update company" : "Failed to add compnay");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg bg-white p-6 shadow"
    >

      <h1 className="mb-6 text-3xl font-bold">
        {isEdit ? "Edit Company" : "Add Company"}
      </h1>
      <div>
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
            required
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Company Type
          </label>
          <select
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          >
            <option value="Service">Service</option>
            <option value="Product">Product</option>
          </select>
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Industry</label>

          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
            required
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Employee Count
          </label>
          <input
            type="number"
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
            required
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Founded Year
          </label>
          <input
            type="number"
            name="foundedYear"
            value={formData.foundedYear}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
            required
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Website</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">CEO Name</label>
          <input
            type="text"
            name="ceoName"
            value={formData.ceoName}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">HR Email</label>
          <input
            type="text"
            name="hrEmail"
            value={formData.hrEmail}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-700"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={() => router.push("/companies")}
            className="mt-6 rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="mt-6 rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            {isEdit ? "Update Company " : "Save Company"}
          </button>
        </div>
      </div>
    </form>
  );
}
