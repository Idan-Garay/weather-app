export const Input = (props: InputProps) => {
  const { placeholder, name, value, onChange, className } = props
  return (
    <input
      placeholder={placeholder}
      name={name}
      className={['text-black p-1 px-2 rounded', className].join(' ')}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></input>
  )
}

export interface InputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  name?: string
  type?: string
  className?: string
}
