const Choice = Object.freeze({
    ROCK : 'rock',
    PAPER : 'paper',
    SCISSORS : 'scissors'
})

const GameResult = Object.freeze({
    PLAYER_WON : true,
    PLAYER_LOST : false,
})

class Game {
  /**
   * @type Choice
   */
  computerMove;

  /**
   * @param humanMove {Choice}
   * @returns {GameResult}
   */
  play(humanMove) {
    throw new Error('Not implmented!');
  }
}
