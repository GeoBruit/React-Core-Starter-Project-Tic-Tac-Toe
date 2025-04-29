import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {

    setIsEditing((editing) => !isEditing);

    if(isEditing){
      onChangeName(symbol, playerName)
    }

  }

  function handleChange(event){

    console.log(event)
    setPlayerName(event.target.value);

  }

  let editablePlayerName = isEditing ? (
    <input type="text" value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );
  let buttonToDisplay = isEditing ? "Save" : "Edit";

  return (
    <li className={isActive? 'active': undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonToDisplay}</button>

    </li>
  );
}
