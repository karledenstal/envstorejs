"use client";

import { useState } from "react";
import { ComboBox } from "./Combobox";

export const ProjectSelect = () => {
  const [value, setValue] = useState("");

  return (
    <ComboBox
      searchPlaceholder="Search..."
      placeholder="Select project"
      items={[
        {
          value: "test",
          label: "Test",
        },
      ]}
      value={value}
      onSelect={(value) => setValue(value)}
    />
  );
};
