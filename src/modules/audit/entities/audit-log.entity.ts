import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('audit-logs')
export class AuditLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    action: string;

    @Column()
    userId: number;

    @Column()
    message: string;

}