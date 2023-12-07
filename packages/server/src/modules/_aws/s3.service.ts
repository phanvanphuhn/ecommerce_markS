import { createWriteStream } from 'fs';

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';
import { ConfigService } from '@nestjs/config';

import { FileUpload } from '../../common/types/file-upload';

@Injectable()
export class S3Service {
  private s3: S3;
  private bucketName: string;
  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3({});
    this.bucketName = this.configService.get<string>('S3_BUCKET_NAME');
  }

  async putStream(
    key: string,
    file: FileUpload,
  ): Promise<AWS.S3.PutObjectOutput> {
    const stream = file.createReadStream();
    const { filename } = file;

    const s3file = await new Promise<AWS.S3.PutObjectOutput>(
      (resolve, reject) => {
        const handleError = (error) => {
          reject(error);
        };
        const chunks: Buffer[] = [];

        stream.on('data', (chunk: Buffer) => {
          chunks.push(chunk);
        });

        stream.once('end', async () => {
          const fileBuffer = Buffer.concat(chunks);
          try {
            const uploaded = await this.putBlob(
              `${key}/${filename}`,
              fileBuffer,
            );

            resolve(uploaded);
          } catch (error) {
            handleError(new InternalServerErrorException(error));
          }
        });

        stream.on('error', (error) =>
          handleError(new InternalServerErrorException(error)),
        );
      },
    );

    return s3file;
  }

  async getBlob(
    key: string,
  ): Promise<PromiseResult<AWS.S3.GetObjectOutput, AWS.AWSError>> {
    const blob = await this.s3
      .getObject({ Bucket: this.bucketName, Key: key })
      .promise();

    return blob;
  }

  async putBlob(
    blobName: string,
    blob: Buffer,
  ): Promise<PromiseResult<AWS.S3.PutObjectOutput, AWS.AWSError>> {
    const params = { Bucket: this.bucketName, Key: blobName, Body: blob };
    const uploadedBlob = await this.s3.putObject(params).promise();

    return uploadedBlob;
  }
}
