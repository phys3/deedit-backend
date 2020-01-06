import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User'
import { Post } from './Post'

@Entity({ name: 'Like' })
export class Like {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'uuid' })
    userId: string;

    @Column({ type: 'uuid' })
    postId: string;

    @Column({ type: 'smallint' })
    vote: number;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updatedAt: string;

    @ManyToOne(() => User, user => user.like, { onDelete: 'CASCADE' })
    user: User;

    @ManyToOne(() => Post, post => post.like, { onDelete: 'CASCADE' })
    post: Post;
}

