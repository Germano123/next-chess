import { Tile } from "@/app/atoms/tile";
import * as pieces from "../../utils/asset.json";

const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
const columns = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface IBoard {
    FEN: string;
}

export const Board = ({ FEN }: IBoard) => {
    let board = [];

    // "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    const fenpieces = FEN.split(' ')[0];
    const fenpiecesrows = fenpieces.split('/');
    
    // console.log(fenpiecesrows)
    for (let j = columns.length-1; j >= 0; j--) {
        for (let i = 0; i < rows.length; i++) {
            const isWhite = ((i+j) % 2 === 1);
            
            let piece = "";
            // console.log(fenpiecesrows[i][j])
            if (fenpiecesrows[j][i] in pieces) {
                let p = fenpiecesrows[j][i];
                // piece = pieces[p];
            }

            board.push(
                <Tile
                    key={ `[${ rows[i] }${ columns[j] }]` }
                    position={ `${ rows[i] }${ columns[j] }` }
                    isWhite={isWhite}
                    piece={piece}
                />
            );
        }
    }

    return (
        <div className="w-[400px] h-[400px]
        grid grid-cols-8 grid-rows-8
        bg-black">
            { board }
        </div>
    );
}
