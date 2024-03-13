import data from "./data.json";
import "./service.scss";
import Card from "./Card";

const Service = () => {
    return (
        <section id="service" className="section">
            <div className="container">
                <div className="services">
                    <div className="services__text_wraper">
                        <p className="name">Our Services</p>
                        <p className="services__text">
                            We know you are searching for for a website to
                            attract amazing clients, not scare them away with
                            complicated and bland design.{" "}
                            <span className="italic">
                                So, we offer attractive and well-disposed:
                            </span>
                        </p>
                    </div>
                    {data.data.map((e) => (
                        <Card key={e.id} data={e} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
