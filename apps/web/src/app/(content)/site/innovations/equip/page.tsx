"use client"

import { InnovationPage, getEquipData } from "@repo/ui";

export default function EquipPage() {
  return <InnovationPage data={getEquipData()} />;
}
