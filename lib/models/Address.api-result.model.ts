export class AddressApiResult {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };

    constructor(data: any) {
        this.street = data.street;
        this.suite = data.suite;
        this.city = data.city;
        this.zipcode = data.zipcode;
        this.geo = data.geo;
    }
}
