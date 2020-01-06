import getConnection from '../db-connect'
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
    const connection = await getConnection();
    const commentRepository = connection.getRepository(Comment)

    return commentRepository.findOne({ where: { id } });
  } catch (error) {
    return error
  }
}

export const getCommentsByPostId = async (postId: string) => {
  try {
    const connection = await getConnection();
    const commentRepository = connection.getRepository(Comment);
  
    return commentRepository.find({ where: { postId } });
  } catch (error) {
    return error
  }
}

export const createComment = async (data: CommentCreateBody) => {
  try {
    const connection = await getConnection();
    const commentRepository = connection.getRepository(Comment);

    return commentRepository.save(data);
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
  
    const connection = await getConnection();
    const commentRepository = connection.getRepository(Comment);

    return commentRepository.update(id, {
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

    const connection = await getConnection();
    const commentRepository = connection.getRepository(Comment);

    return commentRepository.delete(id);
  } catch (error) {
    return error;
  }
}
