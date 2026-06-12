import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { UserCreatedEvent } from "src/events/user-created.event";

@Injectable()
export class EmailListener {
    @OnEvent('user.created')
    async handle(event: UserCreatedEvent) {
        console.log(`Welcome email sent to ${event?.email}`);

        /**
        * Later:
        *
        * await mailer.send(...)
        */

    }
}