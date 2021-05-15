
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as chalk from 'chalk';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => console.log(chalk.blue('[Request]') + ` => ${chalk.magenta.bold('Path:')} ${req.path} ${chalk.yellow('-')} ${chalk.magenta.bold('Execution Time:')} ${Date.now() - now}ms`)),
            );
    }
}
