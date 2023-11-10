// Вставте JavaScript-код тут
class GameElement {
  constructor(type) {
    this.type = type;
  }
}

class GameBoard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.board = this.createBoard();
  }

  createBoard() {
    const symbols = ['♠️', '♣️', '♥️', '♦️'];
    const board = [];
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.cols; j++) {
        const randomType = symbols[Math.floor(Math.random() * symbols.length)];
        const element = new GameElement(randomType);
        row.push(element);
      }
      board.push(row);
    }
    return board;
  }

  printBoard() {
    for (let i = 0; i < this.rows; i++) {
      console.log(
        this.board[i].map(element => element?.type || 'null').join(' ')
      );
    }
  }

  findAndRemoveGroup(row, col) {
    const elementType = this.board[row][col]?.type;

    if (!elementType) {
      return;
    }

    const visited = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(false)
    );

    const dfs = (r, c) => {
      if (
        r < 0 ||
        r >= this.rows ||
        c < 0 ||
        c >= this.cols ||
        visited[r][c] ||
        this.board[r][c]?.type !== elementType
      ) {
        return;
      }

      visited[r][c] = true;
      this.board[r][c] = null;

      dfs(r - 1, c); // Вгору
      dfs(r + 1, c); // Вниз
      dfs(r, c - 1); // Вліво
      dfs(r, c + 1); // Вправо
    };

    dfs(row, col);
  }

  // Перевірка, чи є варіанти об'єднання
  hasMatchingGroups() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.board[i][j] && this.isValidMove(i, j)) {
          return true;
        }
      }
    }
    return false;
  }

  // Перевірка, чи можна вибрати конкретну клітину
  isValidMove(row, col) {
    if (!this.board[row][col]) {
      // Якщо клітка порожня, перевіряємо біля неї
      if (
        (row - 1 >= 0 &&
          this.board[row - 1][col]?.type === this.board[row - 2][col]?.type) ||
        (col - 1 >= 0 &&
          this.board[row][col - 1]?.type === this.board[row][col - 2]?.type)
      ) {
        return true;
      }
    }
    return false;
  }
}

// Приклад використання
const gameBoard = new GameBoard(6, 7);
const gameBoardDiv = document.getElementById('gameBoard');
const updateGameButton = document.getElementById('updateGameButton');

function updateGameBoardView() {
  gameBoardDiv.innerHTML = '';

  for (let i = 0; i < gameBoard.rows; i++) {
    for (let j = 0; j < gameBoard.cols; j++) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.textContent = gameBoard.board[i][j]
        ? gameBoard.board[i][j].type
        : '';

      cellDiv.addEventListener('click', () => {
        gameBoard.findAndRemoveGroup(i, j);
        updateGameBoardView();
      });

      gameBoardDiv.appendChild(cellDiv);
    }
  }
  if (gameBoard.gameOver) {
    updateGameButton.textContent = 'Почати нову гру';
  }
}

updateGameButton.addEventListener('click', () => {
  gameBoard.board = gameBoard.createBoard();
  gameBoard.gameOver = false;
  updateGameButton.textContent = 'Оновити гру';
  updateGameBoardView();
});

updateGameBoardView();
