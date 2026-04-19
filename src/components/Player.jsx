import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleSave = () => {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) onChangeName(symbol, name);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && (
          <input type="text" required value={name} onChange={handleChange} />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleToggleSave}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
