import Head from "next/head";

export default function About() {
    return (
        <>
        <Head>
            <title>Eagle Eye Monitoring, LLC. - Painting</title>
            <link rel="icon" href="/favicon.ico" />
            <meta></meta>
        </Head>

        <div className='main-padding'>
            <div className='mainContainer'>
                <h1>About Us</h1>
                <section style={{width:'800px', textAlign:'center'}}>
                    <p>The secret to good parking lot management requires that you break the public’s bad habits.
                        People are very attached to their cars
                         Most pay very little attention to the rights of the property owner and as a result, property owners feel like they are under siege by the vehicle-wielding public.</p>
                    <p>That’s where we come in.
                        We have developed several strategies that are very effective in breaking those bad habits.
                        We will come in and help re-establish your rights to use your private parking lots as was originally intended.
                        This includes eeping your fire lanes clear, mitigating expired tags and abandoned vehicles, and removing vehicles that are blocking driveways or dumpsters.</p>
                </section>

                <div className='sbsContainer' style={{alignItems:'normal'}}>
                    <section className='sbsText'>
                        <h2>Our Software</h2>
                        <p>Using our software, we provide streamlined online registration, virtual permitting, and record-keeping.
                            Property managers and owners are able to access our programs at any time, and opt-in to mobile alerts, to stay informed about their properties’ security.</p>
                    </section>
                    
                    <section className='sbsText'>
                        <h2>Our Staff</h2>
                        <p>Eagle Eye Monitoring, LLC., has everything to meet your needs for parking management. 
                            First and foremost, all of our customers are treated courteously and respectfully. 
                            The Operations Manager has 20 plus years experience in the towing industry.</p>
                        <p>We have a staff of experienced agents that are trained with our software. 
                            We pride ourselves on providing better service than our competition. 
                            Our phone lines are recorded for customer satisfaction and disputing purposes if a case does arise.</p>
                        <p>We offer virtual permits and online guest registration. 
                            We have made our software relatively easy for those not computer/smart phone savvy.
                            Our IT department will train your staff for use if need be.</p>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}