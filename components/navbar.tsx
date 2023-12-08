import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import Link from "next/link";
// import styles from '@/styles/navbar.styles.scss';

export default function Navbar() {
  // export default function MenuSimple() {
  //   // const createHandleMenuClick = (menuItem: string) => {
  //   //   return () => {
  //   //     console.log(`Clicked on ${menuItem}`);
  //   //   };
  //   // };

  return (
    <div className='container'>
      {/* <Image/> */}
            <Dropdown>
        <MenuButton>Services</MenuButton>
        <Menu>
          <MenuItem><Link href="/services/parking">Parking & Monitoring</Link></MenuItem>
          <MenuItem><Link href="/services/painting">Painting</Link></MenuItem>
        </Menu>
      </Dropdown>
    </div>
  )
}
