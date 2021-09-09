import './App.css'
import React, { useState } from 'react'
import emojiDictionary from './data/animals'

function App() {
  const [emojiInput, setEmojiInput] = useState('')

  const handleSelectAnimal = (animal) => {
    setEmojiInput(animal[0])
  }

  const handleInput = (e) => {
    const {
      target: { value },
    } = e
    setEmojiInput(value)
  }

  return (
    <div className="container">
      <h1>Emoji Interpreter</h1>
      <h2>
        {!emojiInput
          ? 'Please add an emoji'
          : !emojiDictionary.hasOwnProperty(emojiInput)
          ? 'Sorry the emoji is not in our DB'
          : `Selected Animal:   ${emojiInput} ${emojiDictionary[emojiInput]}`}
      </h2>
      <div className="inputStyle">
        <input
          type="text"
          value={emojiInput}
          className="emojiInput"
          placeholder="Add your emoji here 😸"
          onChange={(e) => handleInput(e)}
        />
        <br />
        <br />
        <button
          className="copyBtn"
          onClick={() => navigator.clipboard.writeText(emojiInput)}
        >
          COPY 📋
        </button>
        <button
          className="copyBtn"
          onClick={() => setEmojiInput('')}
          title="Clear input"
        >
          RESET ♻️
        </button>
      </div>
      <br />
      <br />
      <h3>Or select emojis from below:</h3>
      <div className="animalsContainer">
        {Object.entries(emojiDictionary).map((animal, i) => (
          <span
            key={i}
            className={`animal ${
              animal[0] === emojiInput ? 'selectedAnimal' : ''
            }`}
            onClick={() => handleSelectAnimal(animal)}
          >
            {animal[0]}
          </span>
        ))}
      </div>
    </div>
  )
}

export default App
