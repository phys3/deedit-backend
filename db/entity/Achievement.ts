import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserToAchievement } from './UserToAchievement'

@Entity({ name: 'Achievement' })
export class Achievement {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255, nullable: false, unique: true })
    name: string;

    @Column({ length: 2000, nullable: false })
    description: string;

    @Column({ type: 'json', nullable: false, default: {} })
    condition: string;

    @OneToMany(() => UserToAchievement, userToAchievement => userToAchievement.user)
    userToAchievement: UserToAchievement[];
}

