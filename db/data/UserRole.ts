import { getRepository } from 'typeorm'
import { UserRole } from '../entity/UserRole'

export const getUserRoleById = async (userRoleId: string) => {
  try {
    return getRepository(UserRole).findOne({
      where: {
        id: userRoleId,
      },
    });
  } catch (error) {
    return error
  }
}

export const getUserRoles = async () => {
  try {
    const userRoleRepository = getRepository(UserRole);
    return userRoleRepository.find();
  } catch (error) {
    return error
  }
}
