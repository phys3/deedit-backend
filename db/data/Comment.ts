import { getRepository } from 'typeorm'
import { Comment } from '../entity/Comment'

type CommentCreateBody = {
  userId: string;
  postId: string;
  content: string;
}

type CommentUpdateBody = {
  id: string;
  content: string;
}

export const getCommentById = async (id: string) => {
  try {
    return getRepository(Comment).findOne({ where: { id } });
  } catch (error) {
    return error
  }
}

export const getCommentsByPostId = async (postId: string) => {
  try {
    return getRepository(Comment).find({ where: { postId } });
  } catch (error) {
    return error
  }
}

export const createComment = async (data: CommentCreateBody) => {
  try {
    return getRepository(Comment).save(data);
  } catch (error) {
    return error;
  }
}

export const updateComment = async (data: CommentUpdateBody) => {
  try {
    const {
      id,
      content,
    } = data;

    return getRepository(Comment).update(id, {
      content,
      isEdited: true,
      // updatedAt: Date.now().toString(),
    });
  } catch (error) {
    return error;
  }
}

export const deleteComment = async (id: string) => {
  try {
    return getRepository(Comment).delete(id);
  } catch (error) {
    return error;
  }
}
