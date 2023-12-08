import '@/styles/global.scss';
import Navbar from '@/components/navbar';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
    return (
      <div id='layout-parent'>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      </div>
    );
  }
  