type SelectOption = {
  label: string;
  value: string;
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
            
        </ul>
    </div>
  </div>;
};

export default Select;
