import getConnection from '../db-connect'
import { UserRole } from '../entity/UserRole'

export const getUserRoleById = async (userRoleId: string) => {
  try {
    const connection = await getConnection();
    const userRoleRepository = connection.getRepository(UserRole)

    return userRoleRepository.findOne({
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
    const connection = await getConnection();
    const userRoleRepository = connection.getRepository(UserRole);
    return userRoleRepository.find();
  } catch (error) {
    return error
  }
}

// module.exports = { getUserRoleById, getUserRoles }