export const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  if (squares) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  }
  return null;
};

export const defaultStateValues = () => ({
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  isNext: true
});

export const handleNull = (current, i) =>
  calculateWinner(current.squares) || current.squares[i];

export const labelValue = isNext => (isNext ? "X" : "O");
