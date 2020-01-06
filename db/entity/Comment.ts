import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User'
import { Post } from './Post'

@Entity({ name: 'Comment' })
export class Comment {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    // @Column({ type: 'uuid' })
    // parentCommentId: string;

    @Column({ type: 'uuid' })
    userId: string;

    @Column({ type: 'uuid' })
    postId: string;

    @Column({ length: 2000, nullable: false })
    content: string;

    @Column({ default: false })
    isEdited: boolean;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updatedAt: string;

    // @Column({ type: 'timestamp', nullable: true, default: null })
    // deletedAt: string;

    // @ManyToOne(type => Comment, comment => comment.id)
    // comment: Comment;

    @ManyToOne(() => User, user => user.comment, { onDelete: 'SET NULL' })
    user: User[];

    @ManyToOne(() => Post, post => post.comment, { onDelete: 'CASCADE' })
    post: Post[];
}

