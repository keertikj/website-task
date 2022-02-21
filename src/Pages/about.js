import React from 'react';
import Navbar from '../Components/navbar';
import { Section,  Content } from '../Style Components/about';

const About = () => {
    return (
        <Section>
            {/* <Navbar></Navbar> */}
            <Content>
                <h1> Our Mission </h1>
                While there are hundreds of digital marketing agencies, there are only a handful who are comprehensive and very resposive; offering full scope digital and traditional marketing services ,catering to your needs and your timeline. We have a US-based team of 15-20 members with offices in Charlotte NC, Greenville  SC and London UK.
            </Content>
        </Section>
    );
}
export default About
