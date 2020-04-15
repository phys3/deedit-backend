import { getRepository } from 'typeorm'
import { Achievement } from '../entity/Achievement'

export const getAchievementsById = async (achievementId: string) => {
  try {
    return getRepository(Achievement).findOne({
      where: {
        id: achievementId,
      },
    });
  } catch (error) {
    return error
  }
}

export const getAchievements = async () => {
  try {
    return getRepository(Achievement).find();
  } catch (error) {
    return error
  }
}
