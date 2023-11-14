import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';

import { ComplaintsService } from './complaints.service';
import { ComplaintsOutput } from './dto/complaints.dto';

@Resolver()
export class ComplaintsResolver {
  constructor(private complaintsService: ComplaintsService) {}

  @Query(() => [ComplaintsOutput])
  @UseGuards(AzureAuthGuard)
  complaints() {
    return this.complaintsService.getComplaints();
  }

  @Query(() => ComplaintsOutput)
  @UseGuards(AzureAuthGuard)
  complaint(@Args('id') id: number) {
    return this.complaintsService.getComplaint(id);
  }
}
