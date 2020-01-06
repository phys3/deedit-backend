import getConnection from '../db-connect'
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
    const connection = await getConnection();
    const userRepository = connection.getRepository(User)

    return userRepository.findOne({
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
    const connection = await getConnection();
    const userRepository = connection.getRepository(User)

    return userRepository.findOne({ where: { id } });
  } catch (error) {
    return error
  }
}

export const getUsers = async () => {
  try {
    const connection = await getConnection();
    const userRepository = connection.getRepository(User);
    const dbResult = await userRepository.find({
      // join: {
      //   alias: 'user',
      //   leftJoinAndSelect: {
      //     'userRole': 'user.userRole',
      //     'userToAchievement': 'user.userToAchievement',
      //     'achievement': 'userToAchievement.achievement'
      //   }
      // }
    });
    return dbResult;
  } catch (error) {
    return error
  }
}

export const createUser = async (data: UserCreateBody) => {
  try {
    const connection = await getConnection();
    const userRepository = connection.getRepository(User);

    return userRepository.save(data);
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

    const connection = await getConnection();
    const userRepository = connection.getRepository(User);
  
    return userRepository.update(id, {
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
    const connection = await getConnection();
    const userRepository = connection.getRepository(User);

    return userRepository.delete(id);
  } catch (error) {
    return error;
  }
}