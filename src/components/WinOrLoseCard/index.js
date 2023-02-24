// Write your code here.

const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WinOrLoseCard = props => {
  const {win, score, onClickPlay} = props
  const imageUlr1 = win ? wonImage : loseImage
  const isWon = win ? 'You Won' : 'You Lose'
  const isScore = win ? 'Best Score' : 'Score'

  return (
    <div className="game">
      <div>
        <h1>{isWon}</h1>
        <p>{isScore}</p>
        <p>{score}/12</p>
        <button type="button" onClick={onClickPlay}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUlr1} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
