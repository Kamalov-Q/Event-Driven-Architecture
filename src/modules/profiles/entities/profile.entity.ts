import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profiles')
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column({
        nullable: true
    })
    avatar: string | null;

    @Column({
        nullable: true
    })
    bio: string | null;

}