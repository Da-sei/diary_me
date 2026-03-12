import { Module } from '@nestjs/common';
import { PrismaModule } from './../../../prisma/prisma.module';
import { DiaryManagementController } from './controller/diaryManagement.controller';
import { DiaryManagementService } from './service/diaryManagement.service';
import { DiaryManagementCommandRepository } from './infra/diaryManagement.command.repository';
import { DiaryManagementQueryRepository } from './infra/diaryManagement.query.repository';

@Module({
  imports: [PrismaModule],
  controllers: [DiaryManagementController],
  providers: [
    DiaryManagementService,
    {
      provide: 'DIARY_MANAGEMENT_COMMAND_REPOSITORY',
      useClass: DiaryManagementCommandRepository,
    },
    {
      provide: 'DIARY_MANAGEMENT_QUERY_REPOSITORY',
      useClass: DiaryManagementQueryRepository,
    },
  ],
})
export class DiaryManagementModule {}
