// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, IsGameInProgress} = props
  return (
    <nav className="navDiv">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="image-dim"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {IsGameInProgress && (
        <div className="score">
          <p className="scoreName">Score: {currentScore}</p>
          <p className="topScore">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
