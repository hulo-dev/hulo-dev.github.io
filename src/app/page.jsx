import { createClient } from "@prismicio/client";

import About from "./(components)/(About)/About";
import Featured from "./(components)/(Featured)/Featured";
import Amazing from "./(components)/(Amazing)/Amazing";
import Work from "./(components)/(Work)/Work";
import OurPartners from "./(components)/(OurPartners)/OurPartners";
import Service from "./(components)/(Service)/Service";
import Feedback from "./(components)/Feedback/Feedback";
import FooterSocial from "./(components)/(FooterSocial)/FooterSocial";
import Creating from "./(components)/(Creating)/Creating";

const client = createClient("hulo2");

export default async function Home() {
    const projects = await client.getByType("project");
    const featured = projects.results.filter((e) =>
        e.tags.some((tag) => tag == "featured")
    );
    const works = projects.results.filter((e) =>
        e.tags.some((tag) => tag == "work")
    );

    return (
        <div>
            <Amazing />
            <About />
            <Featured data={featured} />
            <Work data={works} />
            <Service />
            <OurPartners />
            <Feedback />
            <Creating />
            <FooterSocial class_name="footer-social" />
        </div>
    );
}
