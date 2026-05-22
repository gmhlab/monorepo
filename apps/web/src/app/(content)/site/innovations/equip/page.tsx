"use client"

import { InnovationTemplate, getEquipData } from "@repo/ui";

export default function EquipPage() {
  return <InnovationTemplate data={getEquipData()} />;
}
