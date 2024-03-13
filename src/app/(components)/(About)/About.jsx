import "./About.scss";

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section__wrap about__wrap">
                    <div className="about__name">
                        <span className="name">about us</span>
                    </div>
                    <div className="about__content">
                        <div className="about__title">
                            <h3>
                                At <span>hulo.dev</span>, we are a team of
                                passionate creators who strive to make
                                substantive changes in web and e-commerce
                                design.
                            </h3>
                        </div>
                        <div className="about__subtitle">
                            <p>
                                We help you seamlessly pass through all stages
                                from a general idea in your head to a compelling
                                design far beyond your expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
