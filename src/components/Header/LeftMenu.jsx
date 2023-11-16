import Menu from '@/components/Menu'

const menuArray = [
  {
    id: 1,
    name: 'Home',
    url: '/home'
  },
  {
    id: 2,
    name: 'O Mnie',
    url: '/about'
  },
  {
    id: 3,
    name: 'Blog',
    url: '/blog'
  },
  {
    id: 4,
    name: 'Kontakt',
    url: '/contact'
  }
]

const LeftMenu = () => {
  return <Menu arr={menuArray} side={'left'} />
}

export default LeftMenu
