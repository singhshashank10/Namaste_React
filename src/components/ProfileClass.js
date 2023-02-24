import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This is name",
      githubId: "",
      img: "",
    };
    console.log("Child - Constructor " + this?.props?.number);
  }

  async componentDidMount() {
    console.log("Child - componentDidMount " + this.props.number);
    let data = await fetch("https://api.github.com/users/singhshashank10");
    let json = await data.json();
    this.setState({
      name: json?.name,
      githubId: json?.login,
      img: json?.avatar_url,
    });
  }

  render() {
    console.log("Child - Render " + this?.props?.number);
    return (
      <div>
        <img src={this.state.img} alt="Avtar" />
        <h2> Name: {this.state.name} </h2>
        <h2> github ID: {this.state.githubId} </h2>
      </div>
    );
  }
}

export default Profile;
