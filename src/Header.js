export default function Header(){
    return (
        <header className="header">
            <img className="troll-img" src={require("./img/troll-face.png")} alt="troll face"></img>
            <h1 className="title"> Meme Generator </h1>
            <h3>React Course - Project 3</h3>
        </header>
    )
}