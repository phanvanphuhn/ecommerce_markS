// app.controller.ts
import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";

import { AzureAuthGuard } from "./guards/azure-ad.guard";

@Controller("user")
export class AuthController {
  @Get("details")
  @UseGuards(AzureAuthGuard)
  login(@Req() req: Request, @Res() reply: Response) {
    reply.status(200).send(req["user"]);
  }
}
