export function formatNumberToValue(number: number): string {
  const value: string = `R$ ${number.toFixed(2)}`;
  return value;
}
