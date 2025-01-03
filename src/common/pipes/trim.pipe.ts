import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class TrimPipe implements PipeTransform {
  transform(value: any, _: ArgumentMetadata): any {
    if (typeof value === 'string') {
      return value.trim()
    }

    if (typeof value === 'object' && value !== null) {
      Object.keys(value).forEach((key) => {
        if (typeof value[key] === 'string') {
          value[key] = value[key].trim()
        }
      })
    }

    return value
  }
}
