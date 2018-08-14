import { Component } from '@nestjs/common';
import { ApiReqService } from 'nst-demo-api-req-module';
import { UserApiResult } from './models/User.api-result.model';

@Component()
export class ApiUserClientService {

    constructor(
        private requestService: ApiReqService,
    ) {}

    public async getUser(id: number): Promise<UserApiResult> {
        const result: any[] = await this.requestService.get(`${process.env.API_URL}/users/${id}`);
        return new UserApiResult(result);
    }

    public async getAllUsers(): Promise<UserApiResult[]> {
        const result: any[] = await this.requestService.get(`${process.env.API_URL}/users`);
        return result.map(u => new UserApiResult(u));
    }
}
