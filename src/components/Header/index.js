import LeftMenu from "@/components/Header/LeftMenu";
import Logo from "@/components/Header/Logo";
import RightMenu from "@/components/Header/RightMenu";

const Header = () => {
    return (
        <header className='w-full p-4 px-10 flex items-center justify-between'>
          <LeftMenu />
          <Logo />
          <RightMenu />
        </header>
    )
}

export default Header