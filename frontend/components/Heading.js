const Heading = ({ className, children, ...props }) => {
  return (
    <div className={`w-full bg-light-grey py-8 px-8 rounded-lg ${className}`} {...props}>
      {children}
    </div>
  )
}
export default Heading