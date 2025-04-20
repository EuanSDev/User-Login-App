const CardHeader = ({title, Icon = false}) => {
  return (
    <div className="flex items-center xl:text-2xl gap-2 bg-dark p-3 xl:p-4 rounded-lg">
      {Icon && (
        <div className="bg-dark-grey p-2 rounded-lg">
          <Icon />
        </div>
      )}
      <h2 className="font-medium">{title}</h2>
    </div>
  )
}
export default CardHeader