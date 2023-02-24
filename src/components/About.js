import { Link, Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import React from "react";
/*
const About = () => { 
  return (
    <>
      <h1> This is About Page</h1>
      <Profile firstName={"Shashank"} lastName={"Singh"} />
    </>
  );
}; */

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor ");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount  ");
  }

  render() {
    console.log("Parent - Render");
    return (
      <>
        <h1> This is About Page</h1>
        <Profile firstName={"Shashank"} lastName={"Singh"} number={"1"} />
      </>
    );
  }
}
export default About;
