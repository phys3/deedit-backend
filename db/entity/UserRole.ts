import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './User'

@Entity({ name: 'UserRole' })
export class UserRole {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255, nullable: false, unique: true })
    name: string;

    @OneToMany(() => User, user => user.userRole)
    user: User[];
}

