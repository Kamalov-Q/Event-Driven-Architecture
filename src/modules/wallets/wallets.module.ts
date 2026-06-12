import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Wallet } from "./entities/wallet.entity";
import { WalletListener } from "./listeners/wallet.listener";

@Module({
    imports: [TypeOrmModule.forFeature([Wallet])],
    providers: [WalletListener]
})
export class WalletModule { }