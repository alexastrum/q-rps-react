const GameChoice = Object.freeze({
    ROCK : 'rock',
    PAPER : 'paper',
    SCISSORS : 'scissors'
})

const GameResult = Object.freeze({
    PLAYER_WON : 1,
    PLAYER_LOST : -1,
})

class Game {
  /**
   * @type {string} GameChoice
   */
  computerMove;

  /**
   * @param playerMove {string} GameChoice
   * @returns {number} GameResult
   */
  play(playerMove) {
    throw new Error('Not implemented!');
  }
}
