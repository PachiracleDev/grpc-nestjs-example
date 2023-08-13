import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => ({
        type: 'postgres',
        url: configService.db.uri,
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [config.KEY],
    }),
  ],
})
export class DatabaseModule {}
