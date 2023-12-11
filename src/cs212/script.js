  const size = 5;
  const board = document.getElementById('board');
  let isGameSolved = false;

  // Initialize the board
  function initializeBoard() {
    createMessageElement();
    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('click', () => toggleCell(i));
      board.appendChild(cell);
    }

    randomizeBoard();
	
  }
  
  function createMessageElement() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Lights Out Game';
  }

  // Randomize the board with a solvable configuration
  function randomizeBoard() {
    for (let i = 0; i < size * size * 2; i++) {
      const randomIndex = Math.floor(Math.random() * (size * size));
      toggleCell(randomIndex);
    }

    isGameSolved = false;
  }

  // Toggle the state of a cell and check for a win
  function toggleCell(index) {
    const cell = board.children[index];
    cell.classList.toggle('is-off');

    // Check for a win
    if (!isGameSolved) {
      const isBoardSolved = Array.from(board.children).every(cell => !cell.classList.contains('is-off'));
      if (isBoardSolved) {
        isGameSolved = true;
        window.alert('You win!');
        resetBoard();
      }
    }
  }

  // Reset the board for a new game
  function resetBoard() {
    Array.from(board.children).forEach(cell => {
      cell.classList.remove('is-off');
    });

    randomizeBoard();
  }

  // Initialize the board on page load
  window.onload = initializeBoard;