import { ICharge, ICompliance, ICustomers, ITransfers } from "./types";

export const transactionsData = [
  {
    SN: 1,

    customer: "John doe",
    description: "wallet topup",
    transaction_type: "credit",
    wallet: "NGN",
    amount: "5000",
    status: "successful",
    timestamp: "Jan 01, 2025",
  },
  {
    SN: 2,

    customer: "John doe",
    description: "wallet topup",
    transaction_type: "credit",
    wallet: "NGN",
    amount: "5000",
    status: "pending",
    timestamp: "Jan 01, 2025",
  },
  {
    SN: 1,

    customer: "John doe",
    description: "wallet topup",
    transaction_type: "credit",
    wallet: "NGN",
    amount: "5000",
    status: "failed",
    timestamp: "Jan 01, 2025",
  },
  {
    SN: 4,

    customer: "John doe",
    description: "wallet topup",
    transaction_type: "credit",
    wallet: "NGN",
    amount: "5000",
    status: "successful",
    timestamp: "Jan 01, 2025",
  },
];
export const transfers: ITransfers[] = [
  {
    SN: 1,

    bank: "GTB",
    account_name: "Fola Babatunji",
    date: "Jan 01,2025",
    currency: "NGN",
    amount: "5000",
    status: "successful",
    tx_ref: "0987wretrytyuyiu98",
  },
  {
    SN: 2,

    bank: "GTB",
    account_name: "Fola Babatunji",
    date: "Jan 01,2025",
    currency: "NGN",
    amount: "5000",
    status: "successful",
    tx_ref: "0987wretrytyuyiu98",
  },
  {
    SN: 3,

    bank: "GTB",
    account_name: "Fola Babatunji",
    date: "Jan 01,2025",
    currency: "NGN",
    amount: "5000",
    status: "failed",
    tx_ref: "0987wretrytyuyiu98",
  },
  {
    SN: 4,

    bank: "GTB",
    account_name: "Fola Babatunji",
    date: "Jan 01,2025",
    currency: "NGN",
    amount: "5000",
    status: "successful",
    tx_ref: "0987wretrytyuyiu98",
  },
  {
    SN: 5,

    bank: "GTB",
    account_name: "Fola Babatunji",
    date: "Jan 01,2025",
    currency: "NGN",
    amount: "5000",
    status: "pending",
    tx_ref: "0987wretrytyuyiu98",
  },
  {
    SN: 6,

    bank: "GTB",
    account_name: "Fola Babatunji",
    date: "Jan 01,2025",
    currency: "GHS",
    amount: "5000",
    status: "successful",
    tx_ref: "0987wretrytyuyiu98",
  },
];
export const cardRequests = [
  {
    SN: 1,
    name: "John doe",
    email: "Johndoe@gmail.com",
    card_type: "USD card",
    status: "successful",
    request_date: "Jan 01, 2025",
    date_issued: "Jan 01, 2025",
  },
  {
    SN: 1,
    name: "John doe",
    email: "Johndoe@gmail.com",

    card_type: "USD card",
    status: "pending",
    request_date: "Jan 01, 2025",
    date_issued: "",
  },
];
export const currencies = [
  {
    SN: 1,
    currency: "Naira",
    code: "NGN",
    country: "Nigeria",
    status: "live",
  },
  {
    SN: 2,
    currency: "Cedis",
    code: "GHS",
    country: "Ghana",
    status: "live",
  },
  {
    SN: 2,
    currency: "Dollar",
    code: "USD",
    country: "Nigeria",
    status: "live",
  },
];
export const compliance: ICompliance[] = [
  {
    SN: 1,
    name: "John doe",
    status: "successful",
    date_approved: "Jan 01,2024",
    date_submitted: "Jan 01,2024",
  },
  {
    SN: 1,
    name: "John doe",
    status: "successful",
    date_approved: "Jan 01,2024",
    date_submitted: "Jan 01,2024",
  },
];
export const users = [
  {
    SN: 1,
    name: "Kingstel",
    email: "Johndoe@gmail.com",
    role: "Super admin",
    status: "Active",
  },
  {
    SN: 1,
    name: "Kingstel",
    email: "Johndoe@gmail.com",
    role: "Super admin",
    status: "Active",
  },
  {
    SN: 1,
    name: "Kingstel",
    email: "Johndoe@gmail.com",
    role: "Super admin",
    status: "Active",
  },
  {
    SN: 1,
    name: "Kingstel",
    email: "Johndoe@gmail.com",
    role: "Super admin",
    status: "Active",
  },
];
export const customersData: ICustomers[] = [
  {
    SN: 1,
    name: "Kingstel",
    email: "Johndoe@gmail.com",
    phone: "097654346787",
    BVN: "2345678908",
    entry_date: "Jan 01,2024",
  },

  {
    SN: 1,
    name: "Kingstel",
    email: "Johndoe@gmail.com",
    phone: "097654346787",
    BVN: "2345678908",
    entry_date: "Jan 01,2024",
  },

  {
    SN: 1,
    name: "Kingstel",
    email: "Johndoe@gmail.com",
    phone: "097654346787",
    BVN: "2345678908",
    entry_date: "Jan 01,2024",
  },

  {
    SN: 1,
    name: "Kingstel",
    email: "Johndoe@gmail.com",
    phone: "097654346787",
    BVN: "2345678908",
    entry_date: "Jan 01,2024",
  },

  {
    SN: 1,
    name: "Kingstel",
    email: "Johndoe@gmail.com",
    phone: "097654346787",
    BVN: "2345678908",
    entry_date: "Jan 01,2024",
  },
];
export const chargeData: ICharge[] = [
  {
    SN: 1,
    country: "Ghana",
    currency: "Cedi",
    charge: "GHS10.00",
    percentage: "0",
  },

  {
    SN: 2,
    country: "Nigeria",
    currency: "Naira",
    charge: "NGN100.00",
    percentage: "0",
  },

  {
    SN: 1,
    country: "USA",
    currency: "Dollar",
    charge: "USD10.00",
    percentage: "2",
  },
];
