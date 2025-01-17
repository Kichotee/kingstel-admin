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
export interface ITransfers {
  SN: number;
  bank: string;
  account_name: string;
  currency: string;
  amount: string;
  date: string;
  tx_ref: string;
  status: string;
}
export interface ICompliance {
  SN: number;
  name: string;
  date_submitted: string;
  date_approved: string;
  status: string;
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
export interface ICharge {
  SN: number;
  country: string;
  charge: string;
  percentage: string;
  currency: string;
}
export interface ICustomers {
  SN: number;
  id?:number;
  name: string;
  email: string;
  phone: string;
  BVN: string;
  entry_date: string;
}

interface Transaction {
  id: number;
  currency_type: string; // Use a string if other currencies are possible
  amount: number;
  status: string; // Use a string if other statuses are possible
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
}

export interface ICreateUser {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  role: string;
  status: string;
}
