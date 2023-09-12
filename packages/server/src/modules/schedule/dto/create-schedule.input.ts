import { Field, InputType, ObjectType, OmitType } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-scalars";

import { ScheduleCreateInput } from "@generated/nestgraphql/schedule/schedule-create.input";
import { PlanCallCreateWithoutScheduleInput } from "@generated/nestgraphql/plan-call/plan-call-create-without-schedule.input";
import { CaseLogCreateWithoutScheduleInput } from "@generated/nestgraphql/case-log/case-log-create-without-schedule.input";

@InputType()
export class PlanCallInput extends OmitType(
  PlanCallCreateWithoutScheduleInput,
  ["id"]
) {}

@InputType()
export class CaseLogInput extends OmitType(CaseLogCreateWithoutScheduleInput, [
  "id",
  "productsInvoice",
]) {
  @Field(() => [String], { nullable: true })
  productsInvoice?: string[];
}

@InputType()
export class CreateScheduleInput extends OmitType(ScheduleCreateInput, [
  "planCall",
  "caseLog",
  "user",
]) {
  @Field(() => PlanCallInput, { nullable: true })
  planCall?: PlanCallInput;

  @Field(() => CaseLogInput, { nullable: true })
  caseLog?: CaseLogInput;

  @Field(() => Number, { nullable: true })
  userId: number;

  @Field(() => GraphQLJSON, { nullable: true })
  select?: any;
}
