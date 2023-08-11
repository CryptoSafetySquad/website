export default function shortAddress(address: string): string {
  return `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
}
