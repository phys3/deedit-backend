import { getRepository } from 'typeorm'
import { Post } from '../entity/Post'

type PostCreateBody = {
  userId: string;
  title: string;
  content: string;
}

type PostUpdateBody = {
  id: string;
  title: string;
  content: string;
}

export const getPostById = async (id: string) => {
  try {
    return getRepository(Post).findOne({ where: { id } });
  } catch (error) {
    return error
  }
}

export const getPostsByUserId = async (userId: string) => {
  try {
    return getRepository(Post).find({ where: { userId } });
  } catch (error) {
    return error
  }
}

export const getPosts = async () => {
  try {
    return getRepository(Post).find();
  } catch (error) {
    return error
  }
}

export const createPost = async (data: PostCreateBody) => {
  try {
    return getRepository(Post).save(data);
  } catch (error) {
    return error;
  }
}

export const updatePost = async (data: PostUpdateBody) => {
  try {
    const {
      id,
      title,
      content,
    } = data;

    return getRepository(Post).update(id, {
      title,
      content,
      isEdited: true,
      // updatedAt: Date.now().toString()
    });
  } catch (error) {
    return error;
  }
}

export const deletePost = async (id: string) => {
  try {
    return getRepository(Post).delete(id);
  } catch (error) {
    return error;
  }
}

