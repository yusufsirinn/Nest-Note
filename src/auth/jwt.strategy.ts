
import { HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ErrorId } from 'src/base-exception-filter/error-id';
import { CustomError } from 'src/base-exception-filter/model/base-exception.model';
import config from 'src/config';
import { AuthService } from './auth.service';
import { UserID } from './dto/user.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwtSecretKey
    });
  }

  async validate(payload: UserID) {
    const user = this.authService.findById(payload.id);
    if (!user) {
      throw new CustomError(ErrorId.unauthorize, HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}