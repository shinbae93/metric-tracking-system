import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { TrimPipe } from './common/pipes'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
  app.useGlobalPipes(new TrimPipe())

  const configService = app.get(ConfigService)
  const port = configService.get<number>('port')

  await app.listen(port)
}
bootstrap()
