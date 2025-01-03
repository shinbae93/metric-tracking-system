import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { METRIC_TYPES } from 'src/common/constants'

@Schema()
export class Metric {
  @Prop({ required: true })
  userId: string

  @Prop({ required: true, enum: Object.values(METRIC_TYPES) })
  type: string

  @Prop({ required: true })
  value: number

  @Prop({ required: true })
  unit: string

  @Prop({ required: true })
  date: Date
}

export const MetricSchema = SchemaFactory.createForClass(Metric)
