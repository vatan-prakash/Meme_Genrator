import trollFace from "../images/troll-face.png";
function Header() {
    return (
        <header className="header">
            <img src={trollFace} className="header-image" alt="troll face" />
            <h2 className="header-title">Meme_Craft</h2>
            <h5 className="header--project">"Memes: the modern art of humor."</h5>
        </header>
    );
}

export default Header;
