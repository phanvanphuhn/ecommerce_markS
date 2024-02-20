import { Stream } from 'stream';

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FileUpload {
  @Field(() => String, { nullable: true })
  filename: string;
  @Field(() => String, { nullable: true })
  mimetype: string;
  @Field(() => String, { nullable: true })
  encoding: string;
  @Field(() => Stream, { nullable: true })
  createReadStream: () => Stream;
}
