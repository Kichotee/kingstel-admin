// export interface ITransactions {
//   SN: number;
//   customer: string;
//   description: string;
//   transaction_type: string;
//   wallet: string;
//   amount: string;
//   status: string;
//   timestamp: string;
// }
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

export interface ITransaction {
  id: number;
  currency_type: string; // Use a string if other currencies are possible
  amount: number;
  status: string; // Use a string if other statuses are possible
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
}

export interface ICreateUser {
  name?: string;
  first_name?:string;
  last_name?:string;
  email: string;
  phone_number: string;
  password: string;
  role: string;
  status: string;
}
type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  phone_number: string;
  is_verified: boolean; // Assuming 0 represents false and 1 represents true
  naira_balance: number;
  cedis_balance: number;
  dollar_balance: number;
  kyc_verified: boolean; // Assuming 0 represents false and 1 represents true
  bvn_verified: boolean; // Assuming 0 represents false and 1 represents true
  kingstel_tag: string | null;
  qr_image: string;
  gender: string | null;
  card_reference: string | null;
  created_at: string;
  updated_at: string;
  dob: string | null;
};

type Card = {
  card_id: number;
  card_type: string;
  card_number: string;
  expiration_date: string;
};

type DvaAccount = {
  dva_account_id: number;
  account_number: string;
  balance: number;
  account_type: string;
};

export type UserResponse = {
  user: User;
  cards: Card[];
  dva_accounts: DvaAccount[];
};

export interface IOptionType{
  value:string;
  label:string;
}