
import {
    ExecutionContext,
    Injectable
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ErrorId } from 'src/base-exception-filter/error-id';
import { CustomError } from 'src/base-exception-filter/model/base-exception.model';
  
  @Injectable()
  export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
      return super.canActivate(context);
    }
  
    handleRequest(err, user, info) {
      if (err || !user) {
        throw new CustomError(ErrorId.unauthorize);
      }
      return user;
    }
  }
  