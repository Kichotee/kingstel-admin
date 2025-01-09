export interface ITransactions {
  SN: number;
  customer: string;
  description: string;
  transaction_type: string;
  wallet: string;
  amount: string;
  status: string;
  timestamp: string;
}
export interface ICardRequests {
  SN: number;

  name: string;
  email: string;
  card_type: string;

  status: string;
  request_date: string;
  date_issued: string;
}

export interface ICurrencies {
  SN: number;
  currency: string;
  code: string;
  country: string;
  status: string;
}
export interface IUsers {
  SN: number;
  name: string;
  email: string;
  role: string;
  status: string;
}
