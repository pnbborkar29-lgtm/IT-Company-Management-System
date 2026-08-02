export interface Company {
  id: number;
  companyName: string;
  companyType: string;
  industry: string;
  employeeCount: number;
  foundedYear: number;
  website: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  description: string;
  ceoName: string;
  hrEmail: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateCompanyInput = Omit<Company, "id" | "createdAt" | "updatedAt">;