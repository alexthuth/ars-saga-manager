import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

function CreateCharacterPage() {
  const [characterName, setCharacterName] = useState('');
  const [characterType, setCharacterType] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (characterName.trim() && characterType) {
      try {
        setError('');
        const response = await api.post('/characters', {
          characterName: characterName,
          characterType: characterType,
          useCunning: false
        });
        console.log('Character created:', response.data);
        navigate(`/character/${response.data.id}`);
      } catch (error) {
        console.error('Error creating character:', error);
        setError('An error occurred while creating the character. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create New Character</h2>
        {error && <p className="text-red-500 mb-4" data-testid="error-message">{error}</p>}
        <input
          data-testid="character-name-input"
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Enter character name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <select
          data-testid="character-type-select"
          value={characterType}
          onChange={(e) => setCharacterType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="">Select character type</option>
          <option value="Magus">Magus</option>
          <option value="Companion">Companion</option>
          <option value="Grog">Grog</option>
          <option value="Animal">Animal</option>
          <option value="Demon">Demon</option>
          <option value="Spirit">Spirit</option>
          <option value="Faerie">Faerie</option>
        </select>
        <div className="flex justify-between">
          <button
            onClick={() => navigate('/characters')}
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-150 ease-in-out"
          >
            Cancel
          </button>
          <button
            data-testid="create-button"
            onClick={handleCreate}
            disabled={!characterName.trim() || !characterType}
            className={`${
              characterName.trim() && characterType ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'
            } text-white font-bold py-2 px-4 rounded transition-colors duration-150 ease-in-out`}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateCharacterPage;