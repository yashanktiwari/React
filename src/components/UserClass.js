import React from "react";

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/yashanktiwari");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    
    render() {

        return (
            <div className="user-card">
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location || "Mathura"}</h3>
                <h3>Contact: @{this.state.userInfo.login}</h3>
            </div>
        );
    }
}

export default UserClass;