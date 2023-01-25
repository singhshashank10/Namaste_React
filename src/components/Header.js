const Title = () => {
    return (
        <a href="/">
            <img alt="LOGO"
                src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj">
            </img>
        </a>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="navBar">
                <ul>
                    <li>HOME</li>
                    <li>CONTACT</li>
                    <li>ANOUT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;