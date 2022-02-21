import React  from "react";
import { useNavigate } from "react-router-dom";
import { Section, Navitems} from "../Style Components/navbar";



function Navbar () {
    const navigate = useNavigate()
    return (
        <div>
            <Section>
                <ul>
                <Navitems>
                    <a href="#">Home</a>

                    <a href="#"
                       onClick= { () => {
                           navigate("/login");
                       }}
                    >
                        Login</a>

                    <a href="#"
                        onClick = { () => {
                            navigate("/about");
                        }}
                    >
                        About Us</a>

                    <a href="#">Blog</a>

                    <a href="#"
                        onClick = { () => {
                            navigate("/contact");
                        }}
                    >
                        Contact</a>
                </Navitems>
                </ul>
                {/* <Input type="text" placeholder="Search"></Input> */}
            </Section>
        </div>
        
    );
                

            
        
}
export default Navbar;