import Head from "next/head"
import Image from "next/image"
// import styles from '@/styles/parking.module.scss'

import Site2 from '../../images/site2.png';
import CTAButton from "@/components/button";

export default function Painting() {
    return (
        <>
        <Head>
            <title>Eagle Eye Monitoring, LLC. - Painting</title>
            <link rel="icon" href="/favicon.ico" />
            <meta></meta>
        </Head>

        <div className='mainContainer'>
            <h1>Painting Services</h1>

            <div className="sbsContainer">
                <section className='sbsText'>
                    <p>Visible traffic control markings provide a smooth parking experience for both visitors and property managers.
                        That’s why we offer painting services--so your property can look its best.
                        We know the guidelines for proper handicap space dimensions, as well as curb allowances, etc. (more items)</p>
                </section>

                <section className="sbsText">
                <h2>We Offer:</h2>
                <ul>
                    <li>repainting parking lines</li>
                    <li>repainting handicap spaces and access isles</li>
                    <li>repainting fire zones</li>
                    <li>painting traffic control markings (arrows or stop lines)</li>
                </ul>

                <div>
                    <p>We offer services priced as needed.</p>
                    <div className='sbsContainer '>
                        <CTAButton variant="primary" text="Get a quote" link="/contact"/>
                    </div>
                </div>
                </section>
            </div>

            <h2>Examples of Our Work:</h2>
            <p>TBD!</p>
        </div>
        </>
    )
}