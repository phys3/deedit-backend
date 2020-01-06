import getConnection from '../db-connect'
import { Achievement } from '../entity/Achievement'

export const getAchievementsById = async (achievementId: string) => {
  try {
    const connection = await getConnection();
    const achievementRepository = connection.getRepository(Achievement)

    return achievementRepository.findOne({
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
    const connection = await getConnection();
    const achievementRepository = connection.getRepository(Achievement);
    return achievementRepository.find();
  } catch (error) {
    return error
  }
}

module.exports = { getAchievementsById, getAchievements }