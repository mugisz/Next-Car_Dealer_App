import { DropdownProps } from '../interface'

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
  placeholder,
}) => (
  <select
    className='p-3 border rounded w-full'
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    <option value=''>{placeholder}</option>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
)
