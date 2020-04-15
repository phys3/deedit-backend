import { getRepository } from 'typeorm'
import { Tag } from '../entity/Tag'

type TagCreateBody = {
  postId: string;
  name: string;
}

export const getTagById = async (id: string) => {
  try {
    return getRepository(Tag).findOne({ where: { id } });
  } catch (error) {
    return error
  }
}

export const getTagsByPostId = async (postId: string) => {
  try {
    return getRepository(Tag).find({ where: { postId } });
  } catch (error) {
    return error
  }
}

export const getTags = async () => {
  try {
    return getRepository(Tag).find();
  } catch (error) {
    return error
  }
}

export const createTag = async (data: TagCreateBody) => {
  try {
    return getRepository(Tag).save(data);
  } catch (error) {
    return error;
  }
}

export const deleteTag = async (id: string) => {
  try {
    return getRepository(Tag).delete(id);
  } catch (error) {
    return error;
  }
}
