import styled from "styled-components";
import User from "../Images/photo1.jpeg"; 

export const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(${User});
height: 100vh;

`


export const Input = styled.input`
width: 300px;
border-radius: 5px;
background: none;
margin: 30px 40px;
padding: 10px;
color: #000;

`


export const Heading = styled.h4`
color: #000;
font-size: 2.5em;

`


export const Button = styled.button`
width: 150px;
border-radius: 5px;
background: none;
margin: 30px 40px;
padding: 10px;
color: #000;
font-size: 1.5em;
cursor: pointer;

`

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
// background: #000;
width: 50vh;
height: 70vh;
border: 2px solid red;
border-radius: 5px;

`
