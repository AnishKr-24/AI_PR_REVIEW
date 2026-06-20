export type UsageSummary = {
  used: number;
  limit: number | null;
};

export function getUsageSummary() {
  return { used: 0, limit: null } as UsageSummary;
}
