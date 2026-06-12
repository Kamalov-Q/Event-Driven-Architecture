import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuditLog } from "./entities/audit-log.entity";
import { AuditListener } from "./listeners/audit.listener";

@Module({
    imports: [TypeOrmModule.forFeature([AuditLog])],
    providers: [AuditListener]
})
export class AuditModule { }