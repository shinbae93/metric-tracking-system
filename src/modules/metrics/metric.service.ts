import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Metric } from 'src/database/schemas'

import { CreateMetricInput } from './dto'

@Injectable()
export class MetricService {
  constructor(@InjectModel(Metric.name) private metricModel: Model<Metric>) {}

  async create(input: CreateMetricInput) {
    // TODO: validate unit based on type

    const newMetric = new this.metricModel(input)

    return newMetric.save()
  }
}
