import { Module } from '@nestjs/common';
import { ApiReqModule } from 'nst-demo-api-req-module';
import { ApiUserClientService } from './api-user-client.service';

@Module({
    components: [
        ApiUserClientService,
    ],
    imports: [
        ApiReqModule,
    ],
    exports: [
        ApiUserClientService,
    ],
})
export class ApiUserClientModule {}
