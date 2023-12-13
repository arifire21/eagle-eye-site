import { useEffect, useState } from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import LogoSmall  from '@/public/logo_transparent_crop_white.png';

// const dropdown = document.getElementsByClassName('dropdown-main')[0]

// //test: observe for the Mui-expanded (dropdown) class
// let observer = new MutationObserver(mutations =>
//   {
//     mutations.forEach(MutationRecord => {
//       const target = MutationRecord.target as HTMLElement
//       if(target.className === 'Mui-expanded'){
//         setArrow('&#9650')
//       } else {
//         setArrow('&#9660;')
//       }
//     })
//   }
// );

// observer.observe(dropdown, {
//   attributes: true,
//   attributeFilter: ['style', 'class']
// })

export default function Navbar() {
  // const [arrow, setArrow] = useState<HTMLElement>(&#9660;) //down-facing carat
  const pathname = usePathname()

  //handlers instead?
  // function 

  return (
    <nav className='nav-container'>
      <Link href="/" title='Home'>
        <Image src={LogoSmall} height={100} width={100} alt='eagle-eye-home' style={{paddingLeft:'1rem'}}/>
      </Link>
      <Dropdown>
        <MenuButton className='dropdown-main primary'>Services &#9660;</MenuButton>
        <Menu className='dropdown-menu'>
          <MenuItem className='dropdown-item'>
            <Link className={`${pathname === '/services/parking' ? 'active' : ''}`}
                  href="/services/parking" title='Parking & Monitoring'>Parking & Monitoring</Link>
          </MenuItem>
          <MenuItem className='dropdown-item'>
            <Link className={`${pathname === '/services/painting' ? 'active' : ''}`}
                  href="/services/painting" title='Painting'>Painting</Link>
          </MenuItem>
        </Menu>
      </Dropdown>
      <Link className={`nav-item ${pathname === '/about' ? 'active' : ''}`}
            href="/about" title='About Us'>About Us
      </Link>
      <Link className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}
            href="/contact" title='Contact Us'>Contact Us
      </Link>
    </nav>
  )
}
