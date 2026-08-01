import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.companyRepository.findOne({
      where: { companyName: createCompanyDto.companyName,
      }
    })

    if (company) {
      throw new ConflictException('Company already exists',)
    }

    const newCompany = this.companyRepository.create(createCompanyDto);

    return this.companyRepository.save(newCompany);
  }
} 
