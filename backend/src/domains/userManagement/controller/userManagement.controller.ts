import { Post, Controller, Body, HttpStatus, Inject } from '@nestjs/common';
import { UserManagementService } from './../service/userManagement.service';

interface UserRegisterBody {
  firstName: string;
  lastName: string;
  mail: string;
  gender: number;
  age: number;
}

interface UserDeleteBody {
  id: number;
}

@Controller()
export class UserManagementController {
  constructor(
    @Inject(UserManagementService)
    private readonly userManagementService: UserManagementService,
  ) {}

  // ユーザ情報の更新
  @Post('register')
  async userRegister(@Body() body: UserRegisterBody): Promise<{
    statusCode: number;
    message: string;
  }> {
    try {
      const { firstName, lastName, mail, gender, age } = body;

      await this.userManagementService.register({
        firstName: firstName,
        lastName: lastName,
        mail: mail,
        gender: gender,
        age: age,
      });

      return {
        statusCode: HttpStatus.OK,
        message: '正常に処理が完了しました',
      };
    } catch (error) {
      throw new Error(`登録に失敗しました: ${error}`);
    }
  }

  // ユーザ情報の削除
  @Post('delete')
  async userDelete(@Body() body: UserDeleteBody): Promise<{
    statusCode: number;
    message: string;
  }> {
    try {
      const { id } = body;

      await this.userManagementService.delete({
        id,
      });

      return {
        statusCode: HttpStatus.OK,
        message: '正常に処理が完了しました',
      };
    } catch (error) {
      throw new Error(`登録に失敗しました: ${error}`);
    }
  }
}
