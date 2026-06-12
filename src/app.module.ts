import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profiles/profile.module';
import { WalletModule } from './modules/wallets/wallets.module';
import { AuditModule } from './modules/audit/audit.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  EventEmitterModule.forRoot(),

  TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    AuthModule,
    ProfileModule,
    WalletModule,
    AuditModule,
    NotificationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
