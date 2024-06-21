export const Button = (props: ButtonProps) => {
  const { label, onClick, className } = props
  return (
    <button className={['text-white', className].join(' ')} onClick={onClick}>
      {label ?? 'Button'}
    </button>
  )
}

export interface ButtonProps {
  label?: string
  onClick?: () => void
  className?: string
}
