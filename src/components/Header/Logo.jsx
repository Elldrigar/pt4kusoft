import logo from '@/../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <div className='w-28'>
        <Image src={logo} alt='Ptakusoft' className='h-auto w-full' />
      </div>
    </Link>
  )
}

export default Logo
