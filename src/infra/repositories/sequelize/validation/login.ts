import User from '../../../dataSource/sequelize/user';
import { LoginValidationRepository } from './../../../../data/interfaces/validation/loginRepository';
export class LoginValidationRepositorySequelize implements LoginValidationRepository {
  async validate(login: string): Promise<Boolean> {

  const userFromDb = await User.findOne({
    raw: true,
    where: {login, is_enabled: true}
  });

  return userFromDb ? userFromDb : false

  }
}