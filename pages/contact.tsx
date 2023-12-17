import Head from "next/head";
import styles from '@/styles/contact.module.scss';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Eagle Eye Monitoring, LLC. - Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta></meta>
      </Head>

      <div className='mainContainer'>
        <h1>Contact Us</h1>

        <div className='sbsContainer'>
          <div className={styles.infoContainer}>
            <section>
              <h2>Our Office</h2>
              <p className={styles.text}>2021 Tyler Street</p>
              <p className={styles.text2}>Hollywood, FL 33020</p>
              <p className={styles.text}><strong>Appointment needed.</strong></p>
            </section>

            <section>
              <h2>Hours of Operation</h2>
              <h3>Management Office:</h3>
              <p className={styles.text}><strong>Monday - Thursday:</strong> 8:00AM - 5:00PM EST</p>
              <p className={styles.text}><strong>Friday:</strong> 9:00AM - 3:00PM EST</p>
              <p className={styles.text2}>Closed on weekends and holidays.</p>

              <h3>Monitoring Staff:</h3>
              <p>Available for any situation 24 hours a day. 
                If you have any further questions, please feel free to contact us. 
                We would be glad to assist you further.</p>
            </section>

            <section>
              <h2>Get in Touch</h2>
              <p className={styles.text}><strong>Management Office Phone: </strong>(954) 321-0559</p>
              <p className={styles.text}><strong>Office Email: </strong> eagleeyemonitoringllc@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </>

  )
}
