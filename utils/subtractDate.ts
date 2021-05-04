export default function subtractDate(diff: number): Date {
  const today = new Date();
  today.setDate(today.getDate() - diff);
  return new Date(today.toDateString());
}
