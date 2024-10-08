import React from 'react';

function CharacterOverviewTab({ character, onSave }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Character Overview</h2>
      <p>Name: {character.characterName}</p>
      <p>Type: {character.characterType}</p>
      {/* Add more overview information here */}
    </div>
  );
}

export default CharacterOverviewTab;