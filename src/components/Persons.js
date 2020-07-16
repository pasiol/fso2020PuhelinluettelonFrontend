import React from "react"
import Person from "./Person"

const Persons = ({filteredList, handleDeleteClicked}) => {
    return (
        <React.Fragment>
            <h2>Numbers</h2>
            <div id="numbers">
                {filteredList.map((person) =>
                    <Person key={person.name} person={person} handleDeleteClicked={handleDeleteClicked} />
                )}
            </div>
        </React.Fragment>
    )
}


export default Persons