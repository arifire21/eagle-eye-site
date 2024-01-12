import { HiOutlineX, HiHome, HiInformationCircle } from 'react-icons/hi'
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { GiPaintRoller } from "react-icons/gi";
import { LuParkingCircle } from "react-icons/lu";
import { Button } from '@mui/base';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import styles from '@/styles/drawer.modules.scss'

interface SidebarProps {
    isOpen: boolean;
}

/* Close/hide the sidenav */
function handleClose() {
    document.getElementById("mobile-sidenav").style.width = "0";
    document.getElementById('mobile-nav-button').style.backgroundColor = "#477E80";
    document.getElementById('sidenav-container').style.opacity = '0';
    document.getElementsByClassName('mainContainer')[0].style.overflowX = 'unset';
} 

export default function MobileSidebar() {
    const pathname = usePathname()

    return(
        <div id='mobile-sidenav'>
            <Button id='close-nav-button' onClick={handleClose}><HiOutlineX size={35}/></Button>
            <div id='sidenav-container'>
                <Link className={`nav-item ${pathname === '/' ? 'active' : ''}`}
                href="/" title='Home'
                onClick={handleClose}><HiHome size={25} className='sidenav-icon'/>Home
                </Link>
                <p style={{color:"#fff", fontSize:'16pt', margin:'0.5rem'}}>Services</p>
                <Link className={`nav-item service-item ${pathname === '/services/parking' ? 'active' : ''}`}
                href="/services/parking" title='Parking & Monitoring'
                onClick={handleClose}><LuParkingCircle size={25} className='sidenav-icon'/> Parking & Monitoring</Link>
                <Link className={`nav-item service-item ${pathname === '/services/painting' ? 'active' : ''}`}
                href="/services/painting" title='Painting'
                onClick={handleClose}><GiPaintRoller size={25} className='sidenav-icon'/> Painting</Link>
                <Link className={`nav-item ${pathname === '/about' ? 'active' : ''}`}
                href="/about" title='About Us'
                onClick={handleClose}><HiInformationCircle size={25} className='sidenav-icon'/> About Us</Link>
                <Link className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}
                href="/contact" title='Contact Us'
                onClick={handleClose}><HiOutlineChatBubbleLeftEllipsis size={25} className='sidenav-icon'/> Contact Us
                </Link>
            </div>
        </div>
    )
}