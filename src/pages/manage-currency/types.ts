export interface ICurrency {
  id: number;
  code: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ICreateCurrencyPayload {
  code: string;
  name: string;
}
