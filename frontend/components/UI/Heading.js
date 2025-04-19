const Heading = ({ className, children, Icon = false, ...props }) => {
  return (
    <div className={`flex items-center gap-x-4 w-full bg-light-grey p-4 sm:p-8 rounded-lg border border-white/20 ${className}`} {...props}>
      {Icon && (
        <div className="bg-dark-grey p-2 rounded-lg">
          <Icon className="text-2xl sm:text-3xl" />
        </div>
      )}
      {children}
    </div>
  )
}
export default Heading