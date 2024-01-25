interface ITile {
    isWhite: boolean;
    position: string;
    piece?: string;
}

export const Tile = ({ isWhite, position, piece }: ITile) => {
    let tileClass = `flex items-center justify-center`;
            
    if (isWhite) tileClass += " bg-white";
    else tileClass += " bg-[#779556]";

    return (
        <div className={tileClass}>
            <img src={piece} />
        </div>
    );
}
