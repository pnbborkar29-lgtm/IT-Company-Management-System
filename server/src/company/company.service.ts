import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  // Create Company
  async create(createCompanyDto: CreateCompanyDto) {
    const existingCompany = await this.companyRepository.findOne({
      where: {
        companyName: createCompanyDto.companyName,
      },
    });

    if (existingCompany) {
      throw new ConflictException('Company already exists');
    }

    const company = this.companyRepository.create(createCompanyDto);

    const savedCompany = await this.companyRepository.save(company);

    return {
      success: true,
      message: 'Company created successfully',
      data: savedCompany,
    };
  }

  // Get All Companies
  async findAll() {
    const companies = await this.companyRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      success: true,
      message: 'Companies fetched successfully',
      data: companies,
    };
  }

  // Get Company By Id
  async findOne(id: number) {
    const company = await this.companyRepository.findOne({
      where: { id },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    return {
      success: true,
      message: 'Company fetched successfully',
      data: company,
    };
  }

  // Update Company
  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.companyRepository.findOne({
      where: { id },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    Object.assign(company, updateCompanyDto);

    const updatedCompany = await this.companyRepository.save(company);

    return {
      success: true,
      message: 'Company updated successfully',
      data: updatedCompany,
    };
  }

  // Delete Company
  async remove(id: number) {
    const company = await this.companyRepository.findOne({
      where: { id },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    await this.companyRepository.remove(company);

    return {
      success: true,
      message: 'Company deleted successfully',
    };
  }
}