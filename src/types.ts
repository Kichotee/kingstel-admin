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
  status: "successful" | "pending" | "failed"|"approved" ;
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
  to: string;
  SN: number;
  country: string;
  charge: string;
  percentage: string;
  currency: string;
}
export interface ICustomers {
  SN: number;
  id?: number;
  name: string;
  email: string;
  phone: string;
  BVN: string;
  created_at: string;
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
  first_name?: string;
  last_name?: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password?: string;
  role: string;
  status: string;
}
export interface IChangeUserPassword{
  current_password:string;
  new_password:string;
  confirm_password:string;
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
  id: number;
  email: string;
  resource: string;
  reference: string;
  card_reference: string;
  currency: string;
  brand: string | null;
  type: string;
  pan: string;
  name_on_card: string;
  first_six_number: string | null;
  last_four_number: string | null;
  expiry_month: string;
  expiry_year: string;
  card_balance: number;
  status: string;
  created_at: string;
  updated_at: string;
};

type DvaAccount = {
  dva_account_id: number;
  account_number: string;
  balance: number;
  account_type: string;
};

export type UserResponse = {
  user: User;
  cards: Card;
  dva_accounts: DvaAccount[];
};

export interface IOptionType {
  value: string;
  label: string;
}
export interface UserCardTransactions {
  id: number;
  email: string;
  transaction_type: string;
  currency_type: string;
  amount: number;
  type: string;
  network: string;
  meta_data: {
    from_currency: string;
    to_currency: string;
    amount: number;
    date: string;
    time: string;
    card_reference: string;
  };
  reference: string;
  status: string;
  created_at: string;
  updated_at: string;
}
