import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from './Post'

@Entity({ name: 'Tag' })
export class Tag {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'uuid' })
    postId: string;

    @Column({ length: 255, nullable: false })
    name: string;

    @ManyToOne(() => Post, post => post.tag, { onDelete: 'CASCADE' }) // TODO - revise this
    post: Post;
}

