import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrganizationsService } from './organizations.service';
import { Organization } from './entitites/organization.entity';
import { OrganizationResolver } from './organizations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  controllers: [
    /*OrganizationsController*/
  ],
  providers: [OrganizationResolver, OrganizationsService],
})
export class OrganizationsModule {}
