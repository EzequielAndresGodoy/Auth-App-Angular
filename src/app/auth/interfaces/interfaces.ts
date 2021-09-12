export interface AuthResponse {
  ok    : string,
  msg?  : string
  uid?  : string,
  name? : string,
  email?: string,
  token?: string,
}

export interface Usuario {
  uid: string;
  name: string;
  email: string;
}