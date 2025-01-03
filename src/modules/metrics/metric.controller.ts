import { Body, Controller, Post } from '@nestjs/common'
import { UserId } from 'src/common/decorators'

import { CreateMetricInput } from './dto'
import { MetricService } from './metric.service'

@Controller('metrics')
export class MetricController {
  constructor(private readonly metricService: MetricService) {}

  @Post()
  create(@Body() input: CreateMetricInput, @UserId() userId: string) {
    input.userId = userId

    return this.metricService.create(input)
  }
}
