enum countries {
  NG = "NG",
  GH = "GH",
  US = "US",
}

export const validCountriesOptions = [
  { value: countries.NG, label: "Nigeria" },
  { value: countries.GH, label: "Ghana" },
  { value: countries.US, label: "US" },
];

export type Status="successful" | "pending" | "failed"|"approved" 