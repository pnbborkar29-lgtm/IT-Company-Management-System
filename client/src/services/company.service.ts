import api from "@/lib/axios";
import { Company, CreateCompanyInput } from "@/types/company";

export const companyService = {
  createCompany: async (data: CreateCompanyInput) => {
    const response = await api.post("/companies", data);
    return response.data;
  },

  getCompanies: async () => {
    const response = await api.get("/companies");
    return response.data;
  },

  getCompanyById: async (id: number) => {
    const response = await api.get(`/companies/${id}`);
    return response.data;
  },

  updateCompany: async (id: number, data: Partial<Company>) => {
    const response = await api.patch(`/companies/${id}`, data);
    return response.data;
  },

  deleteCompany: async (id: number) => {
    const response = await api.delete(`/companies/${id}`);
    return response.data;
  },
};