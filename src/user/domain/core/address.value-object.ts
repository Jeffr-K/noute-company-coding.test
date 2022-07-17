export type AddressProps = { city: string, county: string, details: string, country: string, zipcode: string };

export class Address {
  public city: string
  public county: string;
  public details: string;
  public country: string;
  public zipcode: string;

  constructor(address: AddressProps) {
    this.city = address.city;
    this.county = address.county;
    this.details = address.details;
    this.country = address.country;
    this.zipcode = address.zipcode;
  }
}
