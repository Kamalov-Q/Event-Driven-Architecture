import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('wallets')
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column('bigint')
    balance: number;

}