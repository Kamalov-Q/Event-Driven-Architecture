import { Module } from "@nestjs/common";
import { EmailListener } from "./listeners/email.listener";

@Module({
    providers: [EmailListener]
})
export class NotificationsModule { }