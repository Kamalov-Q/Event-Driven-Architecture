import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { RegisterDto } from "./dto/register.dto";
import { UserCreatedEvent } from "src/events/user-created.event";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,

        private readonly eventEmitter: EventEmitter2,

    ) { }

    async register(dto: RegisterDto) {
        const user = await this.usersService.create(dto);

        this.eventEmitter.emit('user.created',
            new UserCreatedEvent(user?.id, user?.fullName, user?.email)
        );

        return {
            message: 'User created',
            user,
        }

    }

}