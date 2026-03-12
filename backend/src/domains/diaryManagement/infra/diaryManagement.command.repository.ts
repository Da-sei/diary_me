import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { DiaryManagementEntity } from './../domain/entity';
import { IDiaryManagementCommandRepository } from './../domain/interfaces/diaryManagement.command.interface';

@Injectable()
export class DiaryManagementCommandRepository implements IDiaryManagementCommandRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  // 日記の登録
  async register(diary: DiaryManagementEntity): Promise<void> {
    await this.prisma.diary.create({
      data: {
        content: diary.content,
        createdAt: diary.createdAt,
        updatedAt: new Date(),
      },
    });
  }

  // 日記の削除
  async delete(diary: DiaryManagementEntity): Promise<void> {
    await this.prisma.diary.delete({
      where: {
        id: diary.id,
      },
    });
}
