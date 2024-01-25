import { Board } from "./organisms/board";

export default function Home() {
  // https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
  // pieces colorToPlay castleSide enPassant halfMoves completeMoves
  const initialFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center">
      <Board
        FEN={initialFEN}
      />
    </main>
  );
}
