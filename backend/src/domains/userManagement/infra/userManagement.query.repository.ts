import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { UserManagementEntity } from '../domain/entity';
import { IUserManagementQueryRepository } from '../domain/interfaces/userManagement.query.interface';

@Injectable()
export class UserManagementQueryRepository implements IUserManagementQueryRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<UserManagementEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) return null;

    return new UserManagementEntity({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      email: user.email,
      age: user.age,
      isDeleted: user.isDeleted,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }
}
