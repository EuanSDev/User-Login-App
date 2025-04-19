import Link from "next/link"

const Item = ({ text, href, Icon = false }) => {
  return (
    <li>
      <Link href={href} className="flex items-center gap-x-2 py-2 px-4 font-medium cursor-pointer bg-dark-grey rounded-3xl hover:bg-dark-grey/70">
        {Icon && <Icon />}
        <span>{text}</span>
      </Link>
    </li>
  )
}
export default Item;