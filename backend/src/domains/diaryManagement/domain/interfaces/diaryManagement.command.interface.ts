import { DiaryManagementEntity } from './../entity';

export interface IDiaryManagementCommandRepository {
  // 日記の登録
  register(diary: DiaryManagementEntity): Promise<void>;
}
