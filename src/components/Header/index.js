import LeftMenu from '@/components/Header/LeftMenu'
import Logo from '@/components/Header/Logo'
import RightMenu from '@/components/Header/RightMenu'

const Header = () => {
  return (
    <header className='flex w-full items-center justify-between p-4 px-10'>
      <LeftMenu />
      <Logo />
      <RightMenu />
    </header>
  )
}

export default Header
