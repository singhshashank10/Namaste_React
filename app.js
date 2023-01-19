
import React from "react";
import ReactDOM from "react-dom/client";
/* 
    - JSX => thid is html like syntax in js

    - React.createElement => Object => HTML (DOM)

    - JSX => React.createElement => Object => HTML (DOM) , This is done by BABEL

    Functional Component => A normal js function returning a peice of jsx code or react element (name start with capital letter)
 */

//React Element
const heading1 = (
    <h1 id="title" key="h1">
        This is a JSX heading
    </h1>
)

//Functional Component
const Heading = function () {
    return (
        <div>
            <h2> Calling it by tag</h2>
            <p> This is to explain how to call a functional component in the function </p>
        </div>
    )
};


//Functional Component
const Heading2 = () => {
    return (
        <div>
            <h2>Calling it by curly braces </h2>
            <p>This is to explain the functional component can be  called inside another functional componentlike a normal js function inside a curly braces "{ }" </p>
        </div>
    )
}


// in Jsx we can write a normal js code  in side {}; {any js code}
// Component Composition => use a component inside the component 
const FunComp = () => {
    return (
        <div>
            {heading1}
            {Heading2()}
            <Heading />
            <h2 key="h1FunComp" id="funComp">
                Namaste React a valid functional component
            </h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//passsing a react element inside the root

root.render(<FunComp />)


