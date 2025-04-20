const CardItem = ({ text, tag }) => {
  return (
    <li className="flex items-center gap-3 p-1.5 xl:p-[9px] rounded-lg even:bg-dark odd:bg-dark-grey border border-transparent hover:border-white">
      <div className="flex items-center p-1 rounded-lg bg-primary/80 text-sm font-semibold">
        {tag}
      </div>
      <p className="font-medium text-base xl:text-lg">{text}</p>
    </li>
  )
}
export default CardItem