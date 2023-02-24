// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, onEmoji} = props
  const {id, emojiName, emojiUrl} = emojiCardDetails

  const onClickEmoji = () => {
    onEmoji(id)
  }

  return (
    <li className="emojiList">
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="height1" />
      </button>
    </li>
  )
}

export default EmojiCard
