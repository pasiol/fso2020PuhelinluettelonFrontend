import React from "react"

const FilterForm = ({filter, onFilterChange}) => {
    console.log('Component FilterForm props:', filter);
    
    return (
        <React.Fragment>
            <form>
                filter shown with <input onChange={onFilterChange} value={filter} />
            </form>

        </React.Fragment>
    )
}

export default FilterForm
