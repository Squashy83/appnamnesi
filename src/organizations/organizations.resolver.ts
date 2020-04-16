import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrganizationsService } from './organizations.service';
import { Organization } from './entitites/organization.entity';
import { CreateOrganizationDTO } from './dto/organization.dto';

@Resolver('Organization')
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationsService) {}

  @Query(() => [Organization])
  async organizations() {
    const organizations = this.organizationService.findAll();
    return organizations;
  }

  @Mutation(() => Organization)
  async createOrganization(@Args('input') input: CreateOrganizationDTO) {
    return await this.organizationService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteOrganization(@Args('_id') _id: string) {
    return await this.organizationService.delete(_id);
  }
}
