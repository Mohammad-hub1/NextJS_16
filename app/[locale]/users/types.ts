export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string | number;
    geo: {
      lat: string | number;
      lng: string | number;
    };
  };
}
