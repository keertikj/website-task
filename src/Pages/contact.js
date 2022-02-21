import React from 'react';
import Navbar from '../Components/navbar';
import { Section, Container, Heading, Input, Button } from '../Style Components/contact';

const Contact = () => {
    return (
        
        <Section>
        
           
            <Container>
                <Heading> Contact Us </Heading>
                <Input type = "text" placeholder = 'Name'></Input>
                <Input type = "text" placeholder = 'Email'></Input>
                <Input type = "number" placeholder = 'Phone Number'></Input>
                <Input type = "text" placeholder = 'Subject'></Input>
                <Input type = "text" placeholder = 'Message'></Input>
                <Button> Send </Button>
                
            </Container>
        </Section>
    );
}
export default Contact;