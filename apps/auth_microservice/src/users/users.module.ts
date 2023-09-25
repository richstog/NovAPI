import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { AuthMicroserviceModule } from '../auth_microservice.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role]),
    forwardRef(() => AuthMicroserviceModule),
    RolesModule
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
