import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
    }
    
    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>About Class component</h1>
                <h2>This is Namaste React</h2>
                {/* <User name={"Yashank Tiwari (functional component)"}/> */}
                <UserClass name={"Yashank Tiwari (class component)"}/>
            </div>
        )
    }
}

// const About = () => {
//     return (
        // <div>
        //     <h1>About</h1>
        //     <h2>This is Namaste React</h2>
        //     {/* <User name={"Yashank Tiwari (functional component)"}/> */}
        //     <UserClass name={"Yashank Tiwari (class component)"}/>
        // </div>
//     )
// }

export default About;