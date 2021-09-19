import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { TimeUtils } from 'src/common/utils/time-utils';

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name, false);

    @Cron(CronExpression.EVERY_MINUTE)
    handleCron() {
        this.logger.debug('Called EVERY MINUTE');
    }


    @Interval(TimeUtils.second * 10)
    handleInterval() {
        this.logger.debug('Called every 10 seconds');
    }


    @Timeout(TimeUtils.second * 5)
    handleTimeout() {
        this.logger.debug('Called once after 5 seconds');
    }


}
