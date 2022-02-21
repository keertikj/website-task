import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Components/navbar';
import { Section, Container, Input, Heading, Button}  from '../Style Components/login';


export default function Login () {

    const {register, handleSubmit } = useForm ();

    const Schema = (data) => {
        console.log(data);
    }
    
    return (
        <Section>
        {/* <Navbar></Navbar> */}
            <Container>
            <Heading> Login To Your Account </Heading>
                <form onSubmit = {handleSubmit(Schema)}>
                    
                    <Input type="text" {...register('name')}
                       placeholder='Username'>
                    </Input>

                    <Input type="password" {...register('password')}
                        placeholder='Password'>
                    </Input>

                    <Button type="submit">Login </Button>

                </form>
                
                
            </Container>
        </Section>
    )
}

