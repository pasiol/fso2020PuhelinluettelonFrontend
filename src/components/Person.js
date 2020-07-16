import React from "react"

const Person = ({person, handleDeleteClicked}) => {
    console.log('Component Person props:', person);
    return (
        <React.Fragment>
            <p>{person.name} {person.number} <button onClick={() => handleDeleteClicked(person)}>delete</button></p>
        </React.Fragment>
    )
}


export default Person