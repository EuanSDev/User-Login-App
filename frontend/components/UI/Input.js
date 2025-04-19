const Input = ({ label, name, required, readOnly, ...props }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={name} className="text-sm font-medium">{label}{required ? '*' : ''}</label>
      <input
        name={name}
        id={name}
        className={`rounded-sm border border-white py-2.5 px-2 outline-0 ${!readOnly ? 'focus:border-primary' : ''}`}
        readOnly={readOnly}
        {...props}
      />
    </div>
  )
}
export default Input;