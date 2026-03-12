export class UserManagementEntity {
  public readonly id: number;
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly gender: number;
  public readonly email: string;
  public readonly age: number;
  public readonly isDeleted?: boolean;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor({
    id,
    firstName,
    lastName,
    gender,
    email,
    age,
    isDeleted,
    createdAt,
    updatedAt,
  }: {
    id: number;
    firstName: string;
    lastName: string;
    gender: number;
    email: string;
    age: number;
    isDeleted?: boolean;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.age = age;
    this.isDeleted = isDeleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // ユーザ情報の登録
  register(): UserManagementEntity {
    return new UserManagementEntity({
      ...this,
    });
  }

  // ユーザ情報の更新
  updated({
    firstName,
    lastName,
    gender,
    age,
  }: {
    firstName: string;
    lastName: string;
    gender: number;
    age: number;
  }): UserManagementEntity {
    return new UserManagementEntity({
      ...this,
      firstName,
      lastName,
      gender,
      age,
      updatedAt: new Date(),
    });
  }

  // ユーザ情報の論理削除
  delete(): UserManagementEntity {
    return new UserManagementEntity({
      ...this,
      isDeleted: true,
    });
  }
}
