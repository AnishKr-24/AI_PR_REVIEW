"use client";

import { Button } from "@/components/ui/button";

export function CancelSubscriptionButton({ disabled }: { disabled?: boolean }) {
  return (
    <Button variant="destructive" size="sm" disabled={disabled}>
      Cancel subscription
    </Button>
  );
}
