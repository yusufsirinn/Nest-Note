import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './model/user.model';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signUp')
    async signUp(@Body() user: User): Promise<User> {
        return this.authService.signUp(user);
    }

    @Post('findById')
    async findById(@Body() id): Promise<User> {
        return this.authService.findById(id.id);
    }

    @Post('signIn')
    async signIn(@Body() user: User): Promise<string> {
        return this.authService.signIn(user);
    }
}
