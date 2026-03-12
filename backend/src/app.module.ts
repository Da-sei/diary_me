import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UserManagementCommandRepository } from './domains/userManagement/infra/userManagement.command.repository';
import { UserManagementModule } from './../src/domains/userManagement/userManagement.module';

@Module({
  imports: [UserManagementModule],
  controllers: [AppController],
  providers: [PrismaService, UserManagementCommandRepository],
})
export class AppModule {}
