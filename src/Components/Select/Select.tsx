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
  return <div>
    {/* ============== Container ================== */}
    <div className="relative flex items-center ">
        {/* ============== Value ========= */}
        <span>
            Value
        </span>
        {/* =========== X button =========== */}
        <button>&times;</button>
        {/* =========== divider ========== */}
        <div>

        </div>
        {/* =========== Caret ========= */}
        <div>

        </div>
        {/* ============= Options ========== */}
        <ul>
            {
                options.map((item)=>
                    <li key={item.value} className="text-blue-500">{item?.label}</li>
                )
            }
        </ul>
    </div>
  </div>;
};

export default Select;
