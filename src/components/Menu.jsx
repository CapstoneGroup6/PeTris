import '../styles/Menu.css'

const Menu = ({ onClick }) => {
    return (
        <div className="Menu">
            <button className="Button" onClick={onClick}>
                play tetris
            </button>
        </div>
    )
}

export default Menu;