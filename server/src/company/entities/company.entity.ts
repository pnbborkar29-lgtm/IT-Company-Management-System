import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum CompanyType {
  Service = 'Service',
  Product = 'Product',
}

export enum CompanyStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  companyName!: string;

  @Column({ type: 'enum', enum: CompanyType })
  companyType!: CompanyType;

  @Column()
  industry!: string;

  @Column()
  employmentCount!: number;

  @Column()
  foundedYear!: number;

  @Column()
  website!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  pincode!: string;

  @Column({ nullable: true })
  description!: string;

  @Column()
  ceoName!: string;

  @Column()
  hrEmail!: string;

  @Column({
    type: 'enum',
    enum: CompanyStatus,
    default: CompanyStatus.ACTIVE,
  })
  status!: CompanyStatus;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
