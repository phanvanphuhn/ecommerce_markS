import { ScheduleType } from '../prisma/schedule-type.enum';
import { User } from '../user/user.model';
import { PlanCall } from '../plan-call/plan-call.model';
import { CaseLog } from '../case-log/case-log.model';
export declare class Schedule {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    subject: string;
    location: string | null;
    time: string | null;
    endDate: Date;
    startDate: Date;
    scheduleType: keyof typeof ScheduleType;
    userId: number;
    deleted: Date | null;
    user?: User;
    planCall?: PlanCall | null;
    caseLog?: CaseLog | null;
}
