import { AddressApiResult } from './Address.api-result.model';
import { CompanyApiResult } from './Company.api-result.model';

export class UserApiResult {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: AddressApiResult;
    company: CompanyApiResult;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.phone = data.phone;
        this.email = data.email;
        this.website = data.website;

        this.address = new AddressApiResult(data.address);
        this.company = new CompanyApiResult(data.company);
    }
}
