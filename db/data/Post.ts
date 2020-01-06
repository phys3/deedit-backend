import getConnection from '../db-connect'
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
    const connection = await getConnection();
    const postRepository = connection.getRepository(Post)

    return postRepository.findOne({ where: { id } });
  } catch (error) {
    return error
  }
}

export const getPostsByUserId = async (userId: string) => {

  try {
    const connection = await getConnection();
    const postRepository = connection.getRepository(Post)

    return postRepository.find({ where: { userId } });
  } catch (error) {
    return error
  }
}

export const getPosts = async () => {
  try {
    const connection = await getConnection();
    const postRepository = connection.getRepository(Post);

    return postRepository.find();
  } catch (error) {
    return error
  }
}

export const createPost = async (data: PostCreateBody) => {
  try {
    const connection = await getConnection();
    const postRepository = connection.getRepository(Post);

    return postRepository.save(data);
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

    const connection = await getConnection();
    const postRepository = connection.getRepository(Post);

    return postRepository.update(id, {
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

    const connection = await getConnection();
    const postRepository = connection.getRepository(Post);

    return postRepository.delete(id);
  } catch (error) {
    return error;
  }
}

