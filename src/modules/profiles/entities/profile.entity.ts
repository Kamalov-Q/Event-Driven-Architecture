import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profiles')
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column({ type: 'varchar', nullable: true })
    avatar: string | null;

    @Column({ type: 'text', nullable: true })
    bio: string | null;

}