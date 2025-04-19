
const Card = ({ className, children, ...props }) => {
  return (
    <div className={`max-w-4xl w-full bg-light-grey py-8 px-8 rounded-lg ${className}`} {...props}>
      {children}
    </div>
  )
}
export default Card