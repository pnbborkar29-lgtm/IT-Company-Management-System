import { IsOptional, IsString } from 'class-validator';

export class QueryCompanyDto {
        
  @IsString()
  @IsOptional()
  search?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  companyType?: string;

  @IsOptional()
  page?: number;

  @IsOptional()
  limit?: number;
}
