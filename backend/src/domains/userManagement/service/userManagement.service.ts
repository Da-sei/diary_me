import { Injectable, Inject } from '@nestjs/common';
import { IUserManagementCommandRepository } from './../domain/interfaces/userManagement.command.interface';
import { IUserManagementQueryRepository } from './../domain/interfaces/userManagement.query.interface';
import { UserManagementEntity } from '../domain/entity';

@Injectable()
export class UserManagementService {
  constructor(
    @Inject('USER_MANAGEMENT_COMMAND_REPOSITORY')
    private readonly userManagementCommandRepository: IUserManagementCommandRepository,
    @Inject('USER_MANAGEMENT_QUERY_REPOSITORY')
    private readonly userManagementQueryRepository: IUserManagementQueryRepository,
  ) {}

  // ユーザ情報の登録
  async register({
    firstName,
    lastName,
    mail,
    gender,
    age,
  }: {
    firstName: string;
    lastName: string;
    mail: string;
    gender: number;
    age: number;
  }): Promise<void> {
    try {
      // 1. Entityのインスタンスを作成（ドメイン知識の具現化）
      // ここでIDはDB採番を想定して0やnullを渡す、または新規作成用のEntityメソッドを作るのが一般的です
      const userEntity = new UserManagementEntity({
        id: 0, // 新規登録なのでIDは仮値
        email: mail,
        firstName,
        lastName,
        gender,
        age,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // 2. リポジトリを呼び出して永続化
      await this.userManagementCommandRepository.register(userEntity);
    } catch (error) {
      // エラーログの出力や、ビジネス例外への変換を行う
      throw new Error(`ユーザー登録処理に失敗しました: ${error}`);
    }
  }

  // ユーザ情報の更新
  async update({
    firstName,
    lastName,
    mail,
    gender,
    age,
  }: {
    firstName: string;
    lastName: string;
    mail: string;
    gender: number;
    age: number;
  }): Promise<void> {
    try {
      // 1. Entityのインスタンスを作成（ドメイン知識の具現化）
      // ここでIDはDB採番を想定して0やnullを渡す、または新規作成用のEntityメソッドを作るのが一般的です
      const userEntity = new UserManagementEntity({
        id: 0, // 新規登録なのでIDは仮値
        email: mail,
        firstName,
        lastName,
        gender,
        age,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // 2. リポジトリを呼び出して永続化
      await this.userManagementCommandRepository.update(userEntity);
    } catch (error) {
      // エラーログの出力や、ビジネス例外への変換を行う
      throw new Error(`ユーザー更新処理に失敗しました: ${error}`);
    }
  }

  // ユーザ情報の削除
  async delete({ id }: { id: number }): Promise<void> {
    try {
      const existingUser =
        await this.userManagementQueryRepository.findById(id);
      if (!existingUser) throw new Error('ユーザーが存在しません');

      const deletedEntity = existingUser.delete();

      await this.userManagementCommandRepository.delete(deletedEntity);
    } catch (error) {
      throw new Error(`ユーザー削除処理に失敗しました: ${error}`);
    }
  }
}
