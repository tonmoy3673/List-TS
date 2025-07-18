import { useState } from "react";
import Select, { type SelectOption } from "./Select";

const options = [
  {
    label: "First",
    value: 1,
  },
  {
    label: "Second",
    value: 2,
  },
  {
    label: "Third",
    value: 3,
  },
  {
    label: "Fourth",
    value: 4,
  },
  {
    label: "Fifth",
    value: 5,
  },
];
const Item = () => {
    const [selectedOption,setSelectedOption]= useState<SelectOption| undefined>()
  return (
    <div>
      <Select options= {options} value={selectedOption} onChange={(val)=>setSelectedOption(val)}/>
    </div>
  );
};

export default Item;
