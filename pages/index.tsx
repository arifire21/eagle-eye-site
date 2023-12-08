import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import CTAButton from '@/components/button';

import Logo  from '@/public/logo_transparent.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eagle Eye Monitoring, LLC. - Parking Enforcement and Monitoring Services</title>
        <link rel="icon" href="/favicon.ico" />
        <meta></meta>
      </Head>

      {/* <Navbar/> */}
      <h1 className="">
      Hello world!
    </h1>

    <CTAButton variant='primary' text='test'/>
    <CTAButton variant='secondary' text='other test'/>

    <p>If you want happy tenants and customers tomorrow, you’ll hire us today!</p>

    <div className={styles.container}>
    <Image src={Logo} alt='logo' className={styles.item} width={400} height={400}/>
    <section className={styles.item}>
    </section>
    </div>
    </>
  );
}
