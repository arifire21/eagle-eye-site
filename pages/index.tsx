import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eagle Eye Monitoring, LLC.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta></meta>
      </Head>

    <p>F YOU WANT HAPPY TENANTS / CUSTOMERS TOMORROW. YOU’LL HIRE US TODAY!</p>

    <div className={styles.container}>
    <Image src={'../public/vercel.svg'} alt='logo' className={styles.item} width={400} height={400}/>
    <section className={styles.item}>
      <p>We have a staff of experienced agents that are trained with our software. The Operations Manager has 20 plus years experience in the towing industry</p>
      <p>All vehicles that are towed away are recorded and documented in The Omadi System. This allows property managers/owners access to our programs and receive email/text alerts when Eagle Eye is doing an enforcement on your property.</p>
      <p>We offer virtual permits and online guest registration. We have made our software relatively easy for those not computer/smart phone savvy. Our IT department will train your staff for use if need be.</p>
      <p>We look forward to working with you and being the solution for your parking problems.</p>
    </section>
    </div>
    </>
  );
}
