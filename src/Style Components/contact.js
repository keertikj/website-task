import styled from "styled-components";
import User from "../Images/download.jpeg";

export const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-iems: center;
height: 100vh;
backgroung-image: url(${User});
background-repeat: no-repeat;
background-size: cover;
`

export const Input = styled.input`
width: 300px;
border-radius: 5px;
background: none;
magrgin: 30px 0px;
padding: 10px;
margin-top: 20px;
color: #fff:
`

export const Button = styled.button `
width: 320px;
border-radius: 5px;
margin: 30px 0px;
padding: 10px;
cursor: pointer;
font-size: 1.5em;
background: orange;


`

export const Container = styled.div`
display: flex;
justify-content: center;
margin-left: 700px;
flex-direction: column;
align-items: center;
width: 50vh;
height: 70vh;
border-radius: 5px;
border: 2px solid orange;

`

export const Heading = styled.h1`
color: #000;
font-size: 3.5em;
`
