import { Global, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { Metric, MetricSchema } from './schemas'

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      {
        name: Metric.name,
        schema: MetricSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
