import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DatabaseModule } from '@app/common/modules/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@app/common/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import config from 'config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [config],
    }),
    DatabaseModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AuthModule {}
