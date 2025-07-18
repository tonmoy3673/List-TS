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
    <div>
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
                    <li key={item.value}>{item?.label}</li>
                )
            }
        </ul>
    </div>
  </div>;
};

export default Select;
