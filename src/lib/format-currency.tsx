export function formatCurrencyNumber(val: string | number): string {
  // Convert the value to a string if it's a number
  if (!val) return "";

  const numStr = typeof val === "number" ? val.toString() : val;

  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
