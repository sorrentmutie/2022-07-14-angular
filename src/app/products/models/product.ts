export interface Product {
  id: number,
  name: string,
  price: number,
  code: number,
  description: string,
  releaseDate: Date,
  image: string,
  // address: Address
}


export interface Address {
  street: string;
  number?: string;
  postalcode?: string;
  city: string;
  country: string;
}
