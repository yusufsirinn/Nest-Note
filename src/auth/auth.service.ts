import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ErrorId } from 'src/base-exception-filter/error-id';
import { CustomError } from 'src/base-exception-filter/model/base-exception.model';
import { UserID } from './dto/user.dto';
import { User, UserDocument } from './model/user.model';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private jwtService: JwtService) { }

    async signUp(user: User): Promise<User> {
        const usersave = new this.userModel(user);
        return await usersave.save();
    }

    async signIn(user: User): Promise<string> {
        const findUser = await this.userModel.findOne(user);
        if (!findUser) {
            throw new CustomError(ErrorId.unauthorize);
        }
        const payload: UserID = { id: findUser._id };
        return this.jwtService.sign(payload);
    }

    async findById(id: string): Promise<User> {
        return await this.userModel.findById(id);
    }
}
