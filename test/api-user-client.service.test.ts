import { Test } from '@nestjs/testing';

import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

import { SinonStub } from 'sinon';

import { ApiUserClientService } from '../lib/api-user-client.service';
import { UserApiResult } from '../lib/models/User.api-result.model';
import { ApiReqModule, ApiReqService } from 'nst-demo-api-req-module';

chai.use(sinonChai);

const expect = chai.expect;
const mockUrl = 'https://mockUrl.com';

process.env.API_URL = mockUrl;

describe('ApiUserClientService', () => {
    const mockUsers = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496',
                },
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
            },
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618',
                },
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
            },
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
                street: 'Douglas Extension',
                suite: 'Suite 847',
                city: 'McKenziehaven',
                zipcode: '59590-4157',
                geo: {
                    lat: '-68.6102',
                    lng: '-47.0653',
                },
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
                name: 'Romaguera-Jacobson',
                catchPhrase: 'Face to face bifurcated interface',
            },
        },
    ];

    let service: ApiUserClientService;
    let reqService: ApiReqService;

    before(async () => {

        const module = await Test.createTestingModule({
            components: [
                ApiUserClientService,
            ],
            imports: [
                ApiReqModule,
            ],
        }).compile();

        service = module.get<ApiUserClientService>(ApiUserClientService);
        reqService = module.select<ApiReqModule>(ApiReqModule).get<ApiReqService>(ApiReqService);
    });

    describe('getUser method', () => {
        let result: PostApiResult;
        let reqServicestub: SinonStub;

        before(async () => {
            reqServicestub = sinon.stub(reqService, 'get').resolves(mockUsers[0]);

            result = await service.getUser(1);
        });

        after(() => {
            reqServicestub.restore();
        });

        it('should call requestService get method', () => {
            expect(reqServicestub).to.have.been.calledWith(`${mockUrl}/users/1`);
        });

        it('should return an instance of UserApiResult', () => {
            expect(result).to.be.instanceof(UserApiResult);
        });

        it('should return the user', () => {
            expect(result).to.deep.equal(mockUsers[0]);
        });
    });

    describe('getAllUsers method', () => {
        let result: PostApiResult;
        let reqServicestub: SinonStub;

        before(async () => {
            reqServicestub = sinon.stub(reqService, 'get').resolves(mockUsers);

            result = await service.getAllUsers();
        });

        after(() => {
            reqServicestub.restore();
        });

        it('should call requestService get method', () => {
            expect(reqServicestub).to.have.been.calledWith(`${mockUrl}/users`);
        });

        it('should return instances of UserApiResult as an array', () => {
            result.forEach((r) => expect(r).to.be.instanceof(UserApiResult));
        });

        it('should return the user', () => {
            expect(result);
            result.forEach((r, i) => expect(r).to.deep.equal(mockUsers[i]));
        });
    });
});
