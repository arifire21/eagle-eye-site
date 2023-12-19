import Head from "next/head"
import Image from "next/image"
// import styles from '@/styles/parking.module.scss'

import Site2 from '../../images/site2.png';
import CTAButton from "@/components/button";

export default function Home() {
    return (
        <>
        <Head>
            <title>Eagle Eye Monitoring, LLC. - Enforcement and Monitoring</title>
            <link rel="icon" href="/favicon.ico" />
            <meta></meta>
        </Head>

        <div className='mainContainer'>
            <h1>Parking Enforcement and Monitoring Services</h1>

            <h2>Why Work With Eagle Eye?</h2>
            <div className='sbsContainer'>
                <section className='sbsText'>
                    <ul>
                        <li>prompt and efficient service 24 hours a day, 7 days a week</li>
                        <li>customizable 24-hour patrol for your property</li>
                        <li>full security monitoring and vehicle logging services</li>
                        <li>online vehicle removal requests through Omadi</li>
                        <li>we work with your towing company</li>
                        <li>we work with your parking guidelines</li>
                    </ul>

                    <p>We will be the face behind all the vehicles being towed.
                        We photograph all violations and keep them in a specific log maintained for your property.
                        All records are maintained by Omadi software and a weekly activity report is available for you to view our activities.</p>
                </section>
                <section className='sbsText'>
                    <p style={{marginTop:'0'}}>Broward County Ordinance 2012-18, Page 23 Line 13 (B) stipulates, that no towing company is allowed to remove a vehicle without express authorization.</p>
                    <p>This means you cannot give a towing company a blanket set of rules and have them come and tow.
                        Each tow <em>must</em> be expressly authorized, and in some cities, the signor <em>must</em> be present.</p>
                    <p>This is where we can help and will be your authorized agent on your property.
                        We will be the representative for the property or business owner, any time of the day or night.</p>
                </section>
            </div>

            <h2>Examples of Violations We Monitor:</h2>
            <div className='sbsContainer'>
                <div className='imgContainer'>
                    <Image src={Site2} alt='parking-lot-text' className='pageImage' placeholder="blur"/>
                </div>

                    <section className='sbsText'>
                        <ul>
                            <li>handicap parking violations</li>
                            <li>fire lane violations</li>
                            <li>no parking zones</li>
                            <li>tenant parking only</li>
                            <li>blocking dumpster areas or entrances</li>
                            <li>taking multiple parking spaces</li>
                            <li>no permit parking/reserved space violations</li>
                            <li>parking on landscaping or grass</li>
                            <li>parking on sidewalks or curbs</li>
                            <li>long-term parking in loading and un-loading zones</li>
                            <li>blocking other vehicles in parking lot (doubled parked)</li>
                            <li>unauthorized commercial vehicles</li>
                            <li>abandoned or inoperable vehicles</li>
                        </ul>
                    </section>

                    <div className='imgContainer'>
                        <Image src={Site2} alt='parking-lot-text' className='pageImage' placeholder="blur"/>
                    </div>
                </div>

            <div>
                <p>We offer services priced as needed, as we know all properties are different.</p>
                <div className='sbsContainer '>
                    <CTAButton variant="primary" text="Get a quote" link="/contact"/>
                </div>
            </div>

            <div className='sbsContainer' style={{alignItems:'normal'}}>
                <section className='sbsText'>
                    <h2>Residential Communities</h2>
                    <p>For <strong>condo associations</strong>, <strong>gated communities</strong>, or <strong>apartment communities</strong>, we enforce any parking violations that are instructed by you.
                        Whether it is cars with no tags, expired tags, flat tires, inoperable vehicles, double parked cars, cars parked on the grass or in fire lanes, cars in handicapped spots with no placard or unauthorized commercial vehicles, we call the towing company of your choice and sign to have those vehicles removed right away.</p>
                </section>

                <section className='sbsText'>
                    <h2>Commercial Properties</h2>
                    <p>For <strong>commercial properties</strong> and <strong>lots</strong>, we monitor properties for unauthorized parking violations.
                        This will be done via the Omadi system keeping track of employee vehicles.
                        We also keep an eye on overnight parking areas and for-sale vehicles to ensure the property is secure.</p>
                </section>
            </div>
        </div>
        </>
    )
}