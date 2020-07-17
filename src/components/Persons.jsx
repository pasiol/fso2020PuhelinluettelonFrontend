import React from "react";
import Person from "./Person";

// eslint-disable-next-line react/prop-types
const Persons = ({ filteredList, handleDeleteClicked }) => (
      <>
        <h2>Numbers</h2>
        <div id="numbers">
          {filteredList.map((person) =>
            <Person key={person.name} person={person} handleDeleteClicked={handleDeleteClicked} />
          )}
        </div>
      </>
  );

export default Persons