export class CompanyApiResult {
    name: string;
    catchPhrase: string;

    constructor(data: any) {
        this.name = data.name;
        this.catchPhrase = data.catchPhrase;
    }
}
