import getConnection from '../db-connect'
import { Tag } from '../entity/Tag'

type TagCreateBody = {
  postId: string;
  name: string;
}

export const getTagById = async (id: string) => {

  try {
    const connection = await getConnection();
    const tagRepository = connection.getRepository(Tag)

    return tagRepository.findOne({ where: { id } });
  } catch (error) {
    return error
  }
}

export const getTagsByPostId = async (postId: string) => {

  try {
    const connection = await getConnection();
    const tagRepository = connection.getRepository(Tag)

    return tagRepository.find({ where: { postId } });
  } catch (error) {
    return error
  }
}

export const getTags = async () => {
  try {
    const connection = await getConnection();
    const tagRepository = connection.getRepository(Tag);

    return tagRepository.find();
  } catch (error) {
    return error
  }
}

export const createTag = async (data: TagCreateBody) => {
  try {
    const connection = await getConnection();
    const tagRepository = connection.getRepository(Tag);

    return tagRepository.save(data);
  } catch (error) {
    return error;
  }
}

export const deleteTag = async (id: string) => {
  try {

    const connection = await getConnection();
    const tagRepository = connection.getRepository(Tag);

    return tagRepository.delete(id);
  } catch (error) {
    return error;
  }
}
