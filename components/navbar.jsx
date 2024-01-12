import { useEffect, useState } from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { HiOutlineMenu } from 'react-icons/hi'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@mui/base';
import MobileSidebar from '@/components/mobile-drawer'; 
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

/* Open the sidenav */
function handleOpen() {
  document.getElementById("mobile-sidenav").style.width = "100%";
  document.getElementById('mobile-nav-button').style.backgroundColor = "#335e5f";
  document.getElementById('sidenav-container').style.opacity = '1';
  document.getElementsByClassName('mainContainer')[0].style.overflowX = 'hidden'; //test stop scrolling

}

export default function Navbar() {
  // const [arrow, setArrow] = useState<HTMLElement>(&#9660;) //down-facing carat
  const pathname = usePathname()

  //handlers instead?
  // function 

  return (
    <>
    <nav className='nav-container'>
      <Link href="/" title='Home'>
        <Image className='nav-logo' src={LogoSmall} height={55} width={130} alt='eagle-eye-home'/>
      </Link>
      <div id='desktop-wrapper'>
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
      </div>

      <Button onClick={handleOpen} id='mobile-nav-button'><HiOutlineMenu size={40}/></Button>
    </nav>

    <MobileSidebar/>
    </>
  )
}
