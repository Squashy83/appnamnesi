import { Injectable } from '@nestjs/common';
import { Organization } from './entitites/organization.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { OrganizationRes } from './interfaces/organization.interface';
import { CreateOrganizationDTO } from './dto/organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: MongoRepository<Organization>,
  ) {}

  public async create(
    organizationDTO: CreateOrganizationDTO,
  ): Promise<OrganizationRes> {
    const newdoc = await this.organizationRepository.save(
      organizationDTO.toEntity(),
    );
    return OrganizationRes.fromEntity(newdoc);
  }

  public async findAll(): Promise<OrganizationRes[]> {
    return await this.organizationRepository
      .find()
      .then(organizationEnts =>
        organizationEnts.map(docEntity =>
          OrganizationRes.fromEntity(docEntity),
        ),
      );
  }

  async delete(_id: string): Promise<boolean> {
    return (await this.organizationRepository.delete(_id)) ? true : false;
  }
}
