
const Card = ({ className, children, ...props }) => {
  return (
    <div className={`max-w-3xl w-full bg-light-grey p-4 sm:p-8 rounded-lg border border-white/20 ${className}`} {...props}>
      {children}
    </div>
  )
}
export default Card