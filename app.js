import React from "react";
import ReactDOM from "react-dom/client";

const header1 = (<h1>Welcome to Namastey React!!</h1>);
const header2 = (<h2> By:- Shashank Singh</h2>);
const header3 = (<h3>Namastey World this is the front end world and we are on the journey to learn React js v.18</h3>);

const Header = () => {
    return (
        <div className="title">
            <p>{header1}</p>
            <p> {header2}</p>
            <p>{header3}</p>
        </div>
    )
}

// const root = ReactDOM.createRoot(document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />)