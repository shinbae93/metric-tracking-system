import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()

    const userId = request.headers['user-id']

    if (!userId) {
      throw new BadRequestException('A userId must be provided in headers.')
    }

    request.userId = userId

    return true
  }
}
