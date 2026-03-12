import { Inject, Injectable } from '@nestjs/common';
import { DiaryManagementEntity } from '../domain/entity';
import { IDiaryManagementCommandRepository } from '../domain/interfaces/diaryManagement.command.interface';

@Injectable()
export class DiaryManagementService {
  constructor(
    @Inject('DIARY_MANAGEMENT_COMMAND_REPOSITORY')
    private readonly diaryManagementCommandRepository: IDiaryManagementCommandRepository,
  ) {}

  // 日記の登録
  async register({ content }: { content: string }): Promise<void> {
    // 登録処理の実装
    try {
      // インスタントの作成
      const diary = new DiaryManagementEntity({
        id: 0, // IDは自動生成されるため、仮の値を設定
        userId: 0, // ユーザIDは適切な値を設定
        content,
        createdAt: new Date(),
      });

      // 登録処理の呼び出し
      await this.diaryManagementCommandRepository.register(diary);
    } catch (error) {
      // エラーハンドリングの実装
      throw new Error(`日記の登録に失敗しました: ${error}`);
    }
  }

  // 日記の削除
  async delete(id: number): Promise<void> {
    // 削除処理の実装
    try {
      // 削除対象の日記エンティティを作成
      const diary = new DiaryManagementEntity({
        id,
        userId: 0, // ユーザIDは適切な値を設定
        content: '', // 内容は削除のため空で問題ない
        createdAt: new Date(), // 作成日時は削除のため現在日時で問題ない
      });

      // 削除処理の呼び出し
      await this.diaryManagementCommandRepository.delete(diary);
    } catch (error) {
      // エラーハンドリングの実装
      throw new Error(`日記の削除に失敗しました: ${error}`);
    }
  }
}
