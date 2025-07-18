import React from "react";

export type SelectOption = {
  label: string;
  value: number;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

const Select = ({ options, value, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOptionClick = (option: SelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      {/* Selected Value */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 cursor-pointer bg-white shadow-sm hover:border-blue-400 transition"
      >
        <span>{value ? value.label : "Select an option"}</span>

        {/* Clear (X) Button */}
        {value && (
          <button
            className="ml-2 text-gray-500 hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation(); // prevent dropdown toggle
              onChange(undefined);
            }}
          >
            &times;
          </button>
        )}

        {/* Caret */}
        <div className="ml-auto text-gray-500">
          ▼
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.map((item) => (
            <li
              key={item.value}
              onClick={() => handleOptionClick(item)}
              className={`px-4 py-2 hover:bg-blue-100 cursor-pointer ${
                value?.value === item.value ? "bg-blue-50 font-medium" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
