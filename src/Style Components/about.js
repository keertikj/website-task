import styled from "styled-components";
import Photo from "../Images/bg-image.jpeg";

export const Section = styled.div`
display: flex;
height: 100vh;
color: #000;
background-image: url(${Photo});
background-repeat: no-repeat;
background-size: cover;
`

// export const Head = styled.h1`
// display: flex;
// justify-content: center;
// align-item: center;
// font-size: 70px;
// margin-top: 25px;
// margin-left: 60px;
// `

export const Content = styled.h1`
align-items: right;
width: 800px;
font-size: 2.0em;
margin-top: 200px;
margin-left: 950px;
color: #000;
line-spacing: 0.2px;

`