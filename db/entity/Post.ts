import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User'
import { Tag } from './Tag'
import { Like } from './Like'
import { Comment } from './Comment'

@Entity({ name: 'Post' })
export class Post {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid' })
    userId: string;

    @Column({ length: 255, nullable: false })
    title: string;

    @Column({ type: 'text', nullable: true })
    content: string;

    @Column({ default: false })
    isEdited: boolean;

    @Column({ default: false })
    isBlocked: boolean;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updatedAt: string;

    // @Column({ type: 'timestamp', nullable: true, default: null })
    // deletedAt: string;

    @ManyToOne(() => User, user => user.post, { onDelete: 'SET NULL' })
    user: User;

    @OneToMany(() => Tag, tag => tag.post)
    tag: Tag;

    @OneToMany(() => Like, like => like.post)
    like: Like[];

    @OneToMany(() => Comment, comment => comment.post)
    comment: Comment[];
}

