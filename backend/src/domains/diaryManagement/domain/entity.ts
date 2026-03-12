export class DiaryManagementEntity {
  public readonly id: number;
  public readonly userId: number;
  public readonly content: string;
  public readonly createdAt: Date;

  constructor({
    id,
    userId,
    content,
    createdAt,
  }: {
    id: number;
    userId: number;
    content: string;
    createdAt: Date;
  }) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.createdAt = createdAt;
  }

  // 日記の登録
  register(): DiaryManagementEntity {
    return new DiaryManagementEntity({
      ...this,
    });
  }
}
