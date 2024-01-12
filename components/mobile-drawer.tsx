import { HiOutlineX } from 'react-icons/hi'
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
} 

export default function MobileSidebar() {
    const pathname = usePathname()

    return(
        <div id='mobile-sidenav'>
            <Button id='close-nav-button' onClick={handleClose}><HiOutlineX size={40}/></Button>
            <div id='sidenav-container'>
                <Link className={`nav-item ${pathname === '/' ? 'active' : ''}`}
                href="/" title='Contact Us'>Home
                </Link>
                <p style={{color:"#fff"}}>Services</p>
                <Link className={`nav-item ${pathname === '/services/parking' ? 'active' : ''}`}
                href="/services/parking" title='Parking & Monitoring'>Parking & Monitoring</Link>
                <Link className={`nav-item ${pathname === '/services/painting' ? 'active' : ''}`}
                href="/services/painting" title='Painting'>Painting</Link>
                <Link className={`nav-item ${pathname === '/about' ? 'active' : ''}`}
                href="/about" title='About Us'>About Us</Link>
                <Link className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}
                href="/contact" title='Contact Us'>Contact Us
                </Link>
            </div>
        </div>
    )
}