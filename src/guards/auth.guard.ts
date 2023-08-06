import { CanActivate, ExecutionContext } from '@nestjs/common';
import { request } from 'http';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.session.userId;
  }
}
