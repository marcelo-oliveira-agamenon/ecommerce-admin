export interface User {
  ID: string;
  Name: string;
  Email: string;
  Address: string;
  ImageKey: string;
  ImageURL: string;
  Phone: string;
  Birthday: string;
  Gender: string;
  Roles: Array<string>;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface UserFromAPIResponse {
  user: User;
  token: string;
}
