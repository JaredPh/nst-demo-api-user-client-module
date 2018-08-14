import { Test } from '@nestjs/testing';

import * as chai from 'chai';

import { ApiUserClientModule } from '../lib/api-user-client.module';
import { ApiUserClientService } from '../lib/api-user-client.service';
import { Controller } from '@nestjs/common';

const expect = chai.expect;

@Controller()
class MockController {

    constructor(
        private apiReqService: ApiUserClientService,
    ) {}
}

describe('ApiUserClientModule', () => {

    it('should export ApiUserClientService', async () => {
        const module = await Test.createTestingModule({
            controllers: [
                MockController,
            ],
            imports: [
                ApiUserClientModule,
            ],
        }).compile();

        const mockController = await module.get<MockController>(MockController);

        expect(mockController).to.have.key('apiReqService');
        expect(mockController.apiReqService).to.be.instanceof(ApiUserClientService);
    });
});
