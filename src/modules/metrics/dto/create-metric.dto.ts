import { Exclude, Transform } from 'class-transformer'
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { METRIC_TYPES } from 'src/common/constants'

export class CreateMetricInput {
  @IsEnum(Object.values(METRIC_TYPES), {
    message: `Type must be in ${Object.values(METRIC_TYPES).join(', ')}`,
  })
  @IsNotEmpty()
  type: string

  @IsNumber()
  @IsNotEmpty()
  value: number

  @IsString()
  @IsNotEmpty()
  unit: string

  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsNotEmpty()
  date: Date

  @Exclude()
  userId: string
}
