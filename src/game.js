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
   * @type GameChoice
   */
  computerMove;

  /**
   * @param playerMove {GameChoice}
   * @returns {GameResult}
   */
  play(playerMove) {
    throw new Error('Not implemented!');
  }
}
