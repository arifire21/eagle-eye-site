import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import CTAButton from '@/components/button';

import Logo  from '@/public/logo_transparent_crop.png';
import Site1 from '../images/site1.png';
import Site2 from '../images/site2.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eagle Eye Monitoring, LLC. - Parking Enforcement and Monitoring Services</title>
        <link rel="icon" href="/favicon.ico" />
        <meta></meta>
      </Head>

    <div className='main-padding'>
        <div className='mainContainer'>
          <Image src={Logo} alt='Eagle Eye LLC.'/>
          <h1>Parking Enforcement and Monitoring Services</h1>
          <p className={styles.tagline}>If you want happy tenants and customers tomorrow, you’ll hire us today!</p>

          <div className='sbsContainer'>
            <section className='sbsText'>
              <p>If you have a situation with vehicles parking on your property where they should not be parking, then that is when our services come in and you allow Eagle Eye Monitoring, LLC. to work for you.
                We are a licensed and insured parking enforcement company. We specialize in helping property owners, managers, and homeowner associations with their parking issues 24 hours a day, 7 days a week.</p>
              <p>Using our software, we provide streamlined online registration, virtual permitting, and record-keeping.
                Property managers and owners are able to access our programs at any time, and opt-in to mobile alerts, to stay informed about their properties’ security.</p>
  
                <div className='sbsContainer '>
                  <CTAButton variant='primary' text='Learn more'/>
                </div>

              <p>Our goal is to ensure that your property is maintained in compliance with all local and state parking ordinances, as well as your parking rules.
                We take the hassle of finding all the vehicles in violation out of your hands. We work hand and hand with various local tow truck companies.
                Eagle Eye will be there as your representative any time day or night.</p>
            </section>
            <Image src={Site1} alt='parking-lot' className='portfolio-img' width={470} height={355} placeholder='blur'/>
          </div>

          <section>
            <h2>Our Specialties</h2>
            <p>Single Family Homes <span className={styles.bullet}>&bull;</span> Apartment Communities <span className={styles.bullet}>&bull;</span> Gated Communities <span className={styles.bullet}>&bull;</span> COA’s <span className={styles.bullet}>&bull;</span> HOA’s <span className={styles.bullet}>&bull;</span> Commercial Properties</p>
          </section>

          <div className='sbsContainer'>
              <Image src={Site2} alt='parking-lot-text' className='portfolio-img' width={400} height={250}/>
              <section className='sbsText'>
                <h2>We Assist With:</h2>
                <ul>
                  <li>customizable 24 hour patrol for your property</li>
                  <li>handicap parking space and accessible violations</li>
                  <li>fire lanes violations</li>
                  <li>no parking zones</li>
                  <li>tenant parking only</li>
                  <li>dumpster/ entrance blocked</li>
                  <li>taking multiple parking spaces</li>
                  <li>no permit parking/reserved space violations</li>
                  <li>parking on landscaping or grass</li>
                  <li>repainting parking lines</li>
                  and more!
                </ul>

                <div className='sbsContainer '>
                  <CTAButton variant='primary' text='Monitoring services'/>
                  <CTAButton variant='secondary' text='Painting services'/>
                </div>
              </section>
            </div>

            <div className='sbsText '>
              <p>We know each property has different needs and requirements. Schedule a meeting with our manager--we will be happy to survey your property and discuss available options!</p>
              <div className='sbsContainer '>
                <CTAButton variant='primary' text='Contact us'/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
