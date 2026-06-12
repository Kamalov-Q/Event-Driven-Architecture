import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuditLog } from "../entities/audit-log.entity";
import { Repository } from "typeorm";
import { OnEvent } from "@nestjs/event-emitter";
import { UserCreatedEvent } from "src/events/user-created.event";

@Injectable()
export class AuditListener {
    constructor(
        @InjectRepository(AuditLog)
        private readonly auditRepository: Repository<AuditLog>
    ) { }

    @OnEvent('user.created')
    async handle(event: UserCreatedEvent) {
        await this.auditRepository.save({
            action: 'USER_CREATED',
            userId: event.userId,
            message: `${event.email} registered`,
        });

        console.log(`Audit log created for ${event?.userId}`);
    }

}