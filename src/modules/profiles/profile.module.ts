import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "./entities/profile.entity";
import { ProfileListener } from "./listeners/profile.listener";

@Module({
    imports: [TypeOrmModule.forFeature([Profile])],
    providers: [ProfileListener]
})
export class ProfileModule { }