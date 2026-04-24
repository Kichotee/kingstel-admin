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
  status: "successful" | "pending" | "failed" | "approved";
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
  is_blocked:boolean
}
export interface ICharge {
  id: number;
  from_currency: string;
  to_currency: string;
  base_rate: string;
  markup_percentage: string;
  rate: string;
  transaction_type: string;
  service: string;
  last_fetched_at: string;
  is_active: boolean;
  created_at: string | null;
  updated_at: string;
}

export interface IFee {
  id: number;
  service_type: string;
  name: string;
  charge: string;
  percentage: string;
  cap: null;
  currency: string;
  is_active: true;
  description: string;
  created_at: string;
  updated_at: string;
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
  password?: string;
  confirm_password?: string;
  role: string;
  status: string;
}
export type EditUserFormData = {
  name: string;
  email: string;
  password?: string;
  phone: string;
  role: string;
};

export interface IChangeUserPassword {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  phone_number: string;
  is_verified: boolean; // Assuming 0 represents false and 1 represents true
  balances: {
    naira_balance: number;
    cedis_balance: number;
    dollar_balance: number;
  };
  bridge_cardholder_id: string;
  kyc_verified: boolean; // Assuming 0 represents false and 1 represents true
  bvn_verified: boolean; // Assuming 0 represents false and 1 represents true
  kingstel_tag: string | null;
  qr_image: string;
  gender: string | null;
  status: "active" | "inactive"; // Assuming status can be either "active" or "inactive"
  card_reference: string | null;
  created_at: string;
  updated_at: string;
  user_image: string | null;
  dob: string | null;
  is_blocked: "0" | "1";
  address: string | null;
};

type Card = {
  account_id: string | null;
  billing_address: string;
  brand: string;
  bridge_card_id: string;
  card_balance: number;
  card_reference: string;
  card_type: string;
  cardholder_id: string;
  created_at: string;
  currency: string;
  email: string;
  first_six_number: string | null;
  id: number;
  is_active: number;
  is_admin_blocked: number;
  last_four: string;
  last_four_number: string | null;
  name_on_card: string;
  pan: string | null;
  provider: string;
  reference: string;
  resource: string;
  status: string;
  type: string;
  updated_at: string;
  user_id: number;
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

export interface CardDetails {
  id: number;
  email: string;
  resource: string;
  reference: string;
  card_reference: string;
  currency: string;
  brand: string | null;
  type: string;
  pan: string | null;
  name_on_card: string;
  first_six_number: string | null;
  last_four_number: string | null;
  card_balance: number;
  status: string;
  provider: string;
  cardholder_id: string;
  is_admin_blocked: number;
  created_at: string;
  updated_at: string;
  account_id: string | null;
  bridge_card_id: string;
  user_id: number;
  last_four: string;
  card_type: string;
  is_active: number;
  expiry_year?: string;
  cvv?: string;
}

export interface CardDetailsResponse {
  cardDetails: CardDetails;
  transactions: UserCardTransactions[];
}
