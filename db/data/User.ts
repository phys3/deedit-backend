import { getRepository } from 'typeorm'
import { User } from '../entity/User'

type UserCreateBody = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  userRoleId: string;
}

type UserUpdateBody = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
}

export const getUserByUsername = async (username: string) => {
  try {
    return getRepository(User).findOne({
      where: {
        username,
      },
      // join: {
      //   alias: 'user',
      //   leftJoinAndSelect: {
      //     'userRole': 'user.userRole',
      //     'userToAchievement': 'user.userToAchievement',
      //     'achievement': 'userToAchievement.achievement'
      //   }
      // },
    });
  } catch (error) {
    return error
  }
}

export const getUserById = async (id: string) => {
  try {
    return getRepository(User).findOne({ where: { id } });
  } catch (error) {
    return error
  }
}

export const getUsers = async () => {
  try {
    return getRepository(User).findAndCount({
      // join: {
      //   alias: 'user',
      //   leftJoinAndSelect: {
      //     'userRole': 'user.userRole',
      //     'userToAchievement': 'user.userToAchievement',
      //     'achievement': 'userToAchievement.achievement'
      //   }
      // }
    });
  } catch (error) {
    return error
  }
}

export const createUser = async (data: UserCreateBody) => {
  try {
    return getRepository(User).save(data);
  } catch (error) {
    return error;
  }
}

export const updateUser = async (data: UserUpdateBody) => {
  try {
    const { 
      id,
      username,
      firstName,
      lastName,
      email,
      passwordHash,
    } = data;

    return getRepository(User).update(id, {
      username,
      firstName,
      lastName,
      email,
      passwordHash,
      // updatedAt: Date.now().toString()
    });
  } catch (error) {
    return error;
  }
}

export const deleteUser = async (id: string) => {
  try {
    return getRepository(User).delete(id);
  } catch (error) {
    return error;
  }
}