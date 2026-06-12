import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Wallet } from "../entities/wallet.entity";
import { Repository } from "typeorm";
import { OnEvent } from "@nestjs/event-emitter";
import { UserCreatedEvent } from "src/events/user-created.event";

@Injectable()
export class WalletListener {
    constructor(
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>
    ) { }

    @OnEvent('user.created')
    async handle(event: UserCreatedEvent) {
        await this.walletRepository.save({
            userId: event?.userId,
            balance: 10000
        });

        console.log(`Wallet created for ${event?.userId}`);
    }

}