import { Inject } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { DiaryManagementService } from '../service/diaryManagement.service';

@Controller()
export class DiaryManagementController {
  constructor(
    @Inject(DiaryManagementService)
    private readonly diaryManagementService: DiaryManagementService,
  ) {}

  // 日記の登録
  async register({ content }: { content: string }): Promise<void> {
    try {
      await this.diaryManagementService.register({ content });
    } catch (error) {
      throw new Error(`日記の登録に失敗しました: ${error}`);
    }
  }

  // 日記の削除
  async delete(id: number): Promise<void> {
    try {
      await this.diaryManagementService.delete(id);
    } catch (error) {
      throw new Error(`日記の削除に失敗しました: ${error}`);
    }
  }
}
