import Link from 'next/link'

const Menu = ({ arr, side }) => {
  let sideMenu
  let justify

  if (side === 'left') {
    sideMenu = 'mr-2'
    justify = 'justify-end'
  } else if (side === 'right') {
    sideMenu = 'ml-2'
    justify = 'justify-start'
  } else {
    sideMenu = null
    justify = null
  }

  return (
    <nav className={`flex w-full ${justify}`}>
      {arr.map((menu) => (
        <Link key={menu.id} href={menu.url} className={sideMenu}>
          {menu.name}
        </Link>
      ))}
    </nav>
  )
}

export default Menu
