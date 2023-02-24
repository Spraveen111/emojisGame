/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {isEmojiClickedList: [], topScore: 0, IsGameInProgress: true}

  onResetGame = () => {
    this.setState({isEmojiClickedList: [], IsGameInProgress: true})
  }

  displayWin = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, IsGameInProgress: false})
  }

  onEmoji = id => {
    const {emojisList} = this.props
    const {isEmojiClickedList} = this.state
    const isEmojiAlreadyClicked = isEmojiClickedList.includes(id)
    const emojisLength = isEmojiClickedList.length
    if (isEmojiAlreadyClicked) {
      this.displayWin(emojisLength)
    } else {
      if (emojisLength === emojisLength.length - 1) {
        this.displayWin(emojisList.length)
      }
      this.setState(prevState => ({
        isEmojiClickedList: [...prevState.isEmojiClickedList, id],
      }))
    }
  }

  getFullEmojiList = () => {
    const {emojisList} = this.props
    return (
      <ul className="un">
        {emojisList.map(eachOne => (
          <EmojiCard
            key={eachOne.id}
            emojiCardDetails={eachOne}
            onEmoji={this.onEmoji}
          />
        ))}
      </ul>
    )
  }

  winCard = () => {
    const {emojisList} = this.props
    const {isEmojiClickedList} = this.state
    const win = isEmojiClickedList.length === emojisList.length

    return (
      <WinOrLoseCard
        win={win}
        score={isEmojiClickedList.length}
        onClickPlay={this.onResetGame}
      />
    )
  }

  render() {
    const {isEmojiClickedList, topScore, IsGameInProgress} = this.state
    return (
      <div>
        <NavBar
          currentScore={isEmojiClickedList.length}
          topScore={topScore}
          IsGameInProgress={IsGameInProgress}
        />
        {IsGameInProgress ? this.getFullEmojiList() : this.winCard()}
      </div>
    )
  }
}

export default EmojiGame
