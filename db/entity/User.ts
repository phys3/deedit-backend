import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { UserRole } from './UserRole'
import { Post } from './Post'
import { Like } from './Like'
import { Comment } from './Comment'
import { UserToAchievement } from './UserToAchievement'

@Entity({ name: 'User' })
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'uuid' })
    userRoleId: string;

    @Column({ length: 255, nullable: false, unique: true })
    username: string;

    @Column({ length: 255, nullable: false, unique: true })
    email: string;

    @Column({ length: 255 })
    firstName: string;

    @Column({ length: 255 })
    lastName: string;

    @Column({ length: 255, nullable: false })
    passwordHash: string;

    @Column({ type: 'json', nullable: false, default: {} })
    settings: string;

    @Column({ default: false })
    isBlocked: boolean;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updatedAt: string;

    // @Column({ type: 'timestamp', nullable: true, default: null })
    // deletedAt: string;

    // @ManyToMany(type => UserRole, userRole => userRole.id)
    // @JoinTable({
    //     name: 'Like',
    //     joinColumn: {
    //         name: 'userId',
    //         referencedColumnName: 'id'
    //     },
    //     inverseJoinColumn: {
    //         name: 'postId',
    //         referencedColumnName: 'id'
    //     }
    // })
    // public UserRole!: UserRole[];

    @ManyToOne(() => UserRole, userRole => userRole.user, { onDelete: 'NO ACTION' })
    userRole: UserRole;

    @OneToMany(() => Post, post => post.user)
    post: Post[];

    @OneToMany(() => Like, like => like.user)
    like: Like[];

    @OneToMany(() => Comment, comment => comment.user)
    comment: Comment[];

    @OneToMany(() => UserToAchievement, userToAchievement => userToAchievement.user)
    userToAchievement: UserToAchievement[];
}

