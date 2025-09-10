export function format(dateISO: string): string {
  try {
    const d = new Date(dateISO);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
  } catch {
    return dateISO;
  }
}
