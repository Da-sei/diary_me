import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { IUserManagementCommandRepository } from '../domain/interfaces/userManagement.command.interface';
import { UserManagementEntity } from '../domain/entity';

@Injectable()
export class UserManagementCommandRepository implements IUserManagementCommandRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  // ユーザー情報の登録
  async register(user: UserManagementEntity): Promise<void> {
    await this.prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        age: user.age,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  }

  // ユーザ情報の更新
  async update(user: UserManagementEntity): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        age: user.age,
      },
    });
  }

  // ユーザ情報の削除
  async delete(user: UserManagementEntity): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        isDeleted: user.isDeleted,
        updatedAt: new Date(),
      },
    });
  }
}
