"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export type SyncRepoButtonProps = {
  repoFullName: string;
  branch: string;
  syncStatus: string | null;
};

export default function SyncRepoButton({ repoFullName, branch, syncStatus }: SyncRepoButtonProps) {
  return (
    <Button size="sm" variant="outline">
      {syncStatus === "syncing" ? "Syncing..." : "Sync"}
    </Button>
  );
}
