import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";
import { CompanyStatus, CompanyType } from "../entities/company.entity";

export class CreateCompanyDto {@IsString()
  @IsNotEmpty()
  companyName!: string;

  @IsEnum(CompanyType)
  companyType!: CompanyType;

  @IsString()
  @IsNotEmpty()
  industry!: string;

  @IsInt()
  employeeCount!: number;

  @IsInt()
  foundedYear!: number;

  @IsUrl()
  website!: string;

  @IsEmail()
  email!: string;

  @IsString()
  phone!: string;

  @IsString()
  address!: string;

  @IsString()
  city!: string;

  @IsString()
  state!: string;

  @IsString()
  pincode!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  ceoName!: string;

  @IsEmail()
  hrEmail!: string;

  @IsOptional()
  @IsEnum(CompanyStatus)
  status?: CompanyStatus;
}
