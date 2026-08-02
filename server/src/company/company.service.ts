import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { ILike, Repository } from 'typeorm';
import { QueryCompanyDto } from './dto/query-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.companyRepository.findOne({
      where: { companyName: createCompanyDto.companyName },
    });

    if (company) {
      throw new ConflictException('Company already exists');
    }

    const newCompany = this.companyRepository.create(createCompanyDto);

    const savedCompany = await this.companyRepository.save(newCompany);

    return {
      success: true,
      message: 'Company create Successfully',
      data: savedCompany,
    };
  }

  async findAll(query: QueryCompanyDto) {
    const { search, city, companyType, page = 1, limit = 10 } = query;

    const where: any = {};

    if (search) {
      where.companyName = ILike(`%${search}%`);
    }

    if (city) {
      where.city = city;
    }

    if (companyType) {
      where.companyType = companyType;
    }

    const take = Number(limit);
    const currentPage = Number(page);

    const [companies, total] = await this.companyRepository.findAndCount({
      where,
      skip: (currentPage - 1) * take,
      take,
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      success: true,
      message: 'Companies fetached successfully',
      data: companies,
      pagination: {
        page: currentPage,
        limit: take,
        total,
        totalPages: Math.ceil(total / take),
      },
    };
  }

  async findOne(id: number) {
    const company = await this.companyRepository.findOne({
      where: { id },
    });
    if (!company) {
      throw new ConflictException('Company not found');
    }
    return {
      success: true,
      message: 'Company fetched successfully',
      data: company,
    };
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const companyResponse = await this.findOne(id);
    const company = companyResponse.data as Company;

    Object.assign(company, updateCompanyDto);

    const updatedCompany = await this.companyRepository.save(company);
    return {
      success: true,
      message: 'Company updated successfully',
      data: updatedCompany,
    };
  }

  async remove(id: number) {
    const companyResponse = await this.findOne(id);
    const company = companyResponse.data as Company;

    await this.companyRepository.remove(company);

    return {
      success: true,
      message: 'Company deleted successfully',
    };
  }
}
