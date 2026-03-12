import { UserManagementEntity } from './../entity';

export interface IUserManagementQueryRepository {
  // 特定ユーザ情報の取得
  findById(id: number): Promise<UserManagementEntity | null>;
}
