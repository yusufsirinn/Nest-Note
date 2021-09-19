
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { ErrorId } from './error-id';
import { CustomError } from './model/base-exception.model';
import { ErrorMapper } from './util/error-mapper';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    catch(exception, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        if (!(exception instanceof CustomError)) {
            exception = new CustomError(ErrorId.somethingWentWrong);
        }
        const errRes = ErrorMapper.getResponse(exception);
        response
            .status(exception.statusCode)
            .json(errRes);
    }
}
