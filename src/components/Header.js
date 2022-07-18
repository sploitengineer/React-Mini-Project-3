import logo from '../images/logo1.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo} 
                className="header-image"
                alt=''
            />
            <h2 className="header-title">Meme Generator</h2>
        </header>
    )
}