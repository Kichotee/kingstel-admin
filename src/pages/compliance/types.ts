export interface ComplianceUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  
  bvn: "22423373686";
  nin: null;
  id_number: null;

  username: string;
  country_code: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  house_no: string;
  user_image: null;
  country: string;
  phone_number: string;
  is_verified: string;
  naira_balance: string;
  cedis_balance: string;
  dollar_balance: string;
  bridge_cardholder_id: null;
  
  bvn_verified: string;
  bvn_verified_first_name: string;
  bvn_verified_last_name: string;
  bvn_verified_at: string;
  kingstel_tag: string;
  qr_image: string;
  card_reference: null;
  created_at: string;
  updated_at: string;
  last_login_at: string;
  last_login_ip: string;
  dob: string;
  gender: string;
  status: string;
  is_blocked: string;
  kyc_verified: number;
}

export interface ComplianceDocument {
  id: number;
  document_type: string;
  file_path: string;
  user_email: string;
  created_at: string;
  updated_at: string;
  user: ComplianceUser;
}
