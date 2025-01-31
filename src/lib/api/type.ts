interface MultiResponseData<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: IPaginationLink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
export type CardRequest = {
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
export interface SingleResponseData<T> {
  data: T;
  status: boolean;
  message: string;
}
export interface IPaginationLink {
  url: string;
  label: string|number;
  active: boolean;
}
export interface MultiResponse<T> {
  status: boolean;
  message: string;
  data: MultiResponseData<T>;
 
}

