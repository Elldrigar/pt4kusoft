import Menu from '@/components/Menu'

const menuArray = [
  {
    id: 1,
    name: 'instagram',
    url: '/home'
  },
  {
    id: 2,
    name: 'X',
    url: '/about'
  },
  {
    id: 3,
    name: 'Youtube',
    url: '/blog'
  }
]

const RightMenu = () => {
  return <Menu arr={menuArray} side={'right'} />
}

export default RightMenu
