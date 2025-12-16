import React from 'react';

const LandingPageBody = () => {
    return (
        <div className="landing-page-body">
            {/* Hero Section */}
            <section className="hero is-fullheight-with-navbar has-background-white-ter">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-size-1 has-text-weight-bold has-text-danger">
                            Rumpus
                        </h1>
                        <p className="subtitle is-size-4 mt-4">
                            Bold ideas, simple solutions
                        </p>
                        <div className="mt-6">
                            <p className="is-size-3 has-text-weight-bold has-text-danger">LET'S TALK</p>
                            <p className="is-size-4">We’d love to hear from you</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section has-background-white-bis">
                <div className="container">
                    <h2 className="title is-size-2 has-text-weight-bold has-text-dark mb-5">What We Do</h2>
                    <div className="columns is-multiline">
                        <div className="column is-4">
                            <div className="box">
                                <h3 className="title is-4 has-text-danger">Service A</h3>
                                <p>We offer creative solutions that make your life easier and more fun. Details coming soon!</p>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="box">
                                <h3 className="title is-4 has-text-danger">Service B</h3>
                                <p>Our team brings ideas to life with innovative approaches and a personal touch.</p>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="box">
                                <h3 className="title is-4 has-text-danger">Service C</h3>
                                <p>From concept to execution, we handle projects big and small. Stay tuned for updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & How We Work */}
            <section className="section has-background-white-ter">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h2 className="title is-4 has-text-weight-bold has-text-dark">Our Mission</h2>
                            <p>Rumpus exists to shake things up, simplify the complicated, and make every experience engaging.</p>
                        </div>
                        <div className="column">
                            <h2 className="title is-4 has-text-weight-bold has-text-dark">How We Work</h2>
                            <p>We combine creativity, strategy, and collaboration to deliver solutions that actually make a difference.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section has-background-white-bis has-text-centered">
                <div className="container">
                    <h2 className="title is-size-2 has-text-weight-bold has-text-dark mb-4">Get in Touch</h2>
                    <p className="mb-4">Interested in working with us or just want to say hi? Reach out today!</p>
                    <a href="tel:701-361-8401" className="button is-danger is-medium">CALL NOW</a>
                </div>
            </section>
        </div>
    );
};

export default LandingPageBody;
