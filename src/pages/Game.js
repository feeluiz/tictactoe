import React, { useState } from "react";
import * as f from "../functions/functions.js";
import Board from "./Board";

export default function Game() {
  const [ State, setState ] = useState(f.defaultStateValues);
  const { history, stepNumber, isNext } = State;

  const current = history[stepNumber];
  const winner = f.calculateWinner(current.squares);

  function handleClick(i) {
    const history = State.history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (f.handleNull(current, i)) return;

    squares[i] = f.labelValue(isNext);

    setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      isNext: !isNext
    });
  }
  function jumpTo(step) {
    setState({ ...State, stepNumber: step, isNext: step % 2 === 0 });
  }

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : `Go to game start`;

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status = winner
    ? `Winner: ${ winner }`
    : `Next player: ${f.labelValue(isNext)}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{ status }</div>
        <ol>{ moves }</ol>
      </div>
    </div>
  );
}
