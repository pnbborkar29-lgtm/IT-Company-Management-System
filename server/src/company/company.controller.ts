import { Controller,Post, Body, Get, Param, ParseIntPipe, Patch, Delete, Query, } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { QueryCompanyDto } from './dto/query-company.dto';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
   create(
    @Body() createCompanyDto: CreateCompanyDto,){
      return this.companyService.create(createCompanyDto)
    }

    @Get()
    findAll(@Query() query: QueryCompanyDto) {
      return this.companyService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.companyService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id:number,
          @Body() dto: UpdateCompanyDto){
            return this.companyService.update(id, dto)
          }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id:number){
      return this.companyService.remove(id);
    }
}
