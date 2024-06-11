'use client';
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

interface Props {
  items: string[];
  default_item: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<Props> = ({ items, default_item, placeholder, value, onChange }) => {
  return (
    <Select
      label={placeholder}
      selectedKeys={[value]}
      onSelectionChange={(keys) => onChange(Array.from(keys)[0] as string)}
      defaultSelectedKeys={[default_item]}
    >
      {items.map((item) => (
        <SelectItem key={item} value={item}>
          {item}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
