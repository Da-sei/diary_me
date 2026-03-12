import { Module } from '@nestjs/common';
import { PrismaModule } from './../../../prisma/prisma.module';
import { UserManagementController } from './controller/userManagement.controller';
import { UserManagementService } from './service/userManagement.service';
import { UserManagementCommandRepository } from './infra/userManagement.command.repository';
import { UserManagementQueryRepository } from './infra/userManagement.query.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserManagementController],
  providers: [
    UserManagementService,
    {
      provide: 'USER_MANAGEMENT_COMMAND_REPOSITORY',
      useClass: UserManagementCommandRepository,
    },
    {
      provide: 'USER_MANAGEMENT_QUERY_REPOSITORY',
      useClass: UserManagementQueryRepository,
    },
  ],
})
export class UserManagementModule {}
