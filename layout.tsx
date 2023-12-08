import '@/styles/global.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <Navbar/>
            {children}
            <Footer/>
        </body>
      </html>
    )
  }