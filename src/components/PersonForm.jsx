import React from "react"

// eslint-disable-next-line react/prop-types
const PersonForm = ({name, number, addNewName, handleNameChange, handleNumberChange}) => {
  console.log('Component PersonForm props:', name, number);

  return (
    <>
      <form onSubmit={addNewName}>
        <div>
          name:
          <input value={name} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;