import { Analytics } from "../compenents/Analytics"

export const Home =()=>{
    return <>
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p>We are the best team in the world!</p>
                    <h1>Welcome! </h1>
                    <p>Welcome to our Company. We are dedicated to providing the best services to our clients.</p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">Connect Now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">Learn More</button>
                        </a>
                    </div>
                </div>
{/* hero images */}
                <div className="hero-image">
                    <img src="/images/home.png" alt="hero image" width="400" height="500" />

                </div>
</div>
        </section>
    </main>

    {/* 2md section */}
   <Analytics />


    {/* 3rd sectin */}
     <section className="section-hero">
            <div className="container grid grid-two-cols">
                {/* hero images */}
                <div className="hero-image">
                    <img src="/images/design.png" alt="hero image" width="400" height="500" />

                </div>
                <div className="hero-content">
                    <p>We are here to help you achieve your goals!</p>
                    <h1>Get Started Today</h1>
                    <p>Welcome to our Company. We are dedicated to providing the best services to our clients.</p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">Connect Now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">Learn More</button>
                        </a>
                    </div>
                </div>

</div>
        </section>
    </>
}
