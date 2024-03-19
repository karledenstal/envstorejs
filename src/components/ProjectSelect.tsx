"use client";

import { useState } from "react";
import { ComboBox } from "./Combobox";

export const VaultSelect = () => {
  const [value, setValue] = useState("");

  return (
    <ComboBox
      searchPlaceholder="Search..."
      placeholder="Select vault"
      items={[
        {
          value: "all",
          label: "All vaults",
        },
      ]}
      value={value}
      onSelect={(value) => setValue(value)}
    />
  );
};
