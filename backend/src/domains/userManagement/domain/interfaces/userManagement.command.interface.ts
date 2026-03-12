import { UserManagementEntity } from './../entity';

export interface IUserManagementCommandRepository {
  // ユーザ情報の登録
  register(user: UserManagementEntity): Promise<void>;

  // ユーザ情報の更新
  update(user: UserManagementEntity): Promise<void>;

  // ユーザ情報の削除
  delete(user: UserManagementEntity): Promise<void>;
}
