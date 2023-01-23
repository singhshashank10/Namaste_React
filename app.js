import React from "react";
import ReactDOM from "react-dom/client";


const SearchBar = () => {
    return (<div className="searchBar">
        <input className="searchInput" placeholder="Search here">
        </input>
        <button className="searchBtn">Click to search</button>
    </div>)
}
const Img = () => {

    return (
        <div className="logo">
            <a href="/">
                <img className="logoImg"
                    src="https://cdn.dribbble.com/users/1139587/screenshots/16361973/media/513e2a0974f1173d206fcc7b28dea6ad.png"
                />
            </a>
        </div>
    )
}

const UserIcon = () => {
    return (
        <div className="icon">
            <a href="/">
                <img className="iconImg" src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user icons">
                </img>
            </a>
        </div>
    )
}

const Header = () => {
    return (
        <div className="title">
            <Img />
            <SearchBar />
            <UserIcon />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />)