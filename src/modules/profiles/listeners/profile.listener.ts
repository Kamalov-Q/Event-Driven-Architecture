import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Profile } from "../entities/profile.entity";
import { Repository } from "typeorm";
import { OnEvent } from "@nestjs/event-emitter";
import { UserCreatedEvent } from "src/events/user-created.event";

@Injectable()
export class ProfileListener {
    constructor(
        @InjectRepository(Profile)
        private readonly profileRepository: Repository<Profile>
    ) { }

    @OnEvent('user.created')
    async handle(
        event: UserCreatedEvent
    ) {
        await this.profileRepository.save({
            userId: event.userId,
            avatar: null,
            bio: null
        });

        console.log(`Profile created for user ${event?.userId}`);
    }


}