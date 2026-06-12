import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { getDatabaseConfig } from './config/database.config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profiles/profile.module';
import { WalletModule } from './modules/wallets/wallets.module';
import { AuditModule } from './modules/audit/audit.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { validationSchema } from './config/env.validation';
import { HealthModule } from './common/health/health.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema,
  }),
  EventEmitterModule.forRoot(),

  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: getDatabaseConfig,
  }),
    UsersModule,
    AuthModule,
    ProfileModule,
    WalletModule,
    AuditModule,
    NotificationsModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
