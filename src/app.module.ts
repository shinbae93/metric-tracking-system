import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'

import { AuthGuard } from './common/guards'
import { ConfigModule } from './config'
import { DatabaseModule } from './database'
import { MetricModule } from './modules/metrics'

@Module({
  imports: [ConfigModule, DatabaseModule, MetricModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
