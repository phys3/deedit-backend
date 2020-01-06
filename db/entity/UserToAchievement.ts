import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User'
import { Achievement } from './Achievement'

@Entity({ name: 'UserToAchievement' })
export class UserToAchievement {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'uuid' })
    userId: string;

    @Column({ type: 'uuid' })
    achievementId: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updatedAt: string;

    @Column({ length: 2000, nullable: true })
    comment: string;

    @ManyToOne(() => User, user => user.userToAchievement, { onDelete: 'CASCADE' })
    user: User[];

    @ManyToOne(() => Achievement, achievement => achievement.userToAchievement, { onDelete: 'CASCADE' })
    achievement: Achievement[];
}

