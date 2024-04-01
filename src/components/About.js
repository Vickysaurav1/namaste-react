import React from "react"
import User from "./User"
import UserClass from "./UserClass"

const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is namaste react course.</h2>
            {/* <User name={"Saurav (functional)"}/> */}
            <UserClass name = {"Saurav (class)"} location={`Pune {class}`} />
        </div>   
    )
}

export default About