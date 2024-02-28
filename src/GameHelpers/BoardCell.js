import "../styles/BoardCell.css";

const BoardCell = ({ cell }) => {
    if (cell.className) {
        return (
            <div className={`BoardCell ${cell.className}`}>
                <div className="Sparkle"></div>
            </div>
        )
    } else {
        return <div className={`BoardCell ${cell.className}`}></div>
    }
}

export default BoardCell;